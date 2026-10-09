import sanka from "@utils/sanka";

interface NewApiSchedule {
    schedule: {
        day: string;
        donghua_list: any[];
    }[];
}

interface Schedule {
  days: {
    day: string;
    animeList: animeCard4[];
  }[];
}

const PLACEHOLDER = "/images/sankadonghub.jpg";

// Derive slug seri dari slug episode: "supreme-god-emperor-episode-647-subtitle-indonesia" -> "supreme-god-emperor"
function seriesSlugFromEpisode(slug: string): string | null {
  const m = slug.match(/^(.+)-episode-\d+/i);
  return m ? m[1] : null;
}

// Bangun peta slug-seri -> poster dari endpoint yang menyediakan poster (home/latest/ongoing).
// Endpoint /schedule TIDAK punya field poster sama sekali (verifikasi API Sanka).
// Cache modul-level agar hanya di-fetch sekali per proses (rate limit Sanka 45 req/menit!).
let posterMapPromise: Promise<Map<string, string>> | null = null;

async function buildPosterMap(): Promise<Map<string, string>> {
  const map = new Map<string, string>();
  const sources = ["/home/1", "/home/2", "/home/3", "/latest/1", "/latest/2", "/ongoing/1"];
  const results = await Promise.all(
    sources.map(async (p) => {
      try {
        const r = await sanka<any>(p);
        return r.ok ? r.data : null;
      } catch {
        return null;
      }
    })
  );
  for (const data of results) {
    if (!data) continue;
    // kumpulkan semua array item yang punya poster (latest_release, ongoing_list, dll.)
    const lists: any[] = Object.values(data).filter((v: any) => Array.isArray(v));
    for (const list of lists) {
      for (const item of list) {
        if (!item?.poster || !item?.slug) continue;
        const seri = seriesSlugFromEpisode(item.slug) || item.slug;
        if (!map.has(seri)) map.set(seri, item.poster);
      }
    }
  }
  return map;
}

function getPosterMap(): Promise<Map<string, string>> {
  if (!posterMapPromise) posterMapPromise = buildPosterMap();
  return posterMapPromise;
}

export default async function scheduleService() {
  const result = await sanka<NewApiSchedule>("/schedule");

  const posterMap = await getPosterMap();

  const days = (result.data.schedule || []).map((d) => ({
      day: d.day,
      animeList: (d.donghua_list || []).map((item) => ({
          title: item.title,
          poster: item.poster || posterMap.get(item.slug) || PLACEHOLDER,
          type: "anime",
          score: "N/A",
          estimation: item.release_time || "",
          animeId: item.slug,
          genres: ""
      }))
  }));

  return { ...result, data: { days } };
}
