/* empty css                                    */
import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute, l as Fragment } from '../../chunks/astro/server_Dh1Z2Bpm.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_BFg5Q30V.mjs';
import { $ as $$Breadcrumb, a as $$Sesepuh, b as $$Content, c as $$WidgetTitle, d as $$Sidebar } from '../../chunks/Sidebar_BHdYpvpW.mjs';
import { a as animeConfig } from '../../chunks/animeConfig_Dv_0l7zJ.mjs';
import { g as generateUrlPath } from '../../chunks/generateUrlPath_Bu-CsIBe.mjs';
import { $ as $$PlayIcon } from '../../chunks/PlayIcon_BRUAaIaZ.mjs';
import { $ as $$StarIcon } from '../../chunks/StarIcon_DbHjy4pI.mjs';
import { $ as $$AnimeDetails } from '../../chunks/AnimeDetails_oM2wrYyc.mjs';
import { $ as $$Error } from '../../chunks/Error_P4yMsrwR.mjs';
import { s as sanka } from '../../chunks/sanka_DSusrVHd.mjs';
import { g as genreService } from '../../chunks/genreService_DeDh8SHo.mjs';
export { renderers } from '../../renderers.mjs';

async function animeInfoService(routeParams) {
  const { animeId } = routeParams;
  const result = await sanka(`/detail/${animeId}`);
  const raw = result.data;
  const mappedData = {
    title: raw.title,
    poster: raw.poster,
    score: { value: raw.rating || "N/A", users: "" },
    japanese: raw.alter_title,
    synonyms: raw.alter_title,
    english: raw.title,
    status: raw.status || "Unknown",
    type: raw.type,
    source: "Original",
    duration: raw.duration,
    episodes: parseInt(raw.episodes_count) || null,
    season: raw.season,
    studios: raw.studio,
    producers: "",
    aired: raw.released,
    trailer: "",
    batchList: [],
    synopsis: {
      paragraphs: [raw.synopsis],
      connections: []
    },
    genreList: (raw.genres || []).map((g) => ({
      title: g.name,
      genreId: g.slug
    })),
    episodeList: (raw.episodes_list || []).map((e) => {
      const match = e.episode.match(/Episode\s+(\d+(\.\d+)?)/i);
      let displayTitle = e.episode;
      if (match) {
        displayTitle = `Ep ${match[1]}`;
      } else {
        const slugParts = e.slug.split("-");
        const numIndex = slugParts.indexOf("episode");
        if (numIndex !== -1 && slugParts[numIndex + 1] && /^\d+$/.test(slugParts[numIndex + 1])) {
          displayTitle = `Ep ${slugParts[numIndex + 1]}`;
        }
      }
      return {
        title: displayTitle,
        episodeId: e.slug
      };
    }).sort((a, b) => {
      const na = parseFloat((a.title.match(/Ep\s+([\d.]+)/i) || [])[1] ?? "0");
      const nb = parseFloat((b.title.match(/Ep\s+([\d.]+)/i) || [])[1] ?? "0");
      return nb - na;
    })
  };
  return { ...result, data: mappedData };
}

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const config = animeConfig.default || animeConfig;
  const {
    sankadonghub: { siteName }
  } = config;
  const { animeId } = Astro2.params;
  const animeInfo = await animeInfoService({ animeId });
  const { data, ok, statusCode, message, statusMessage } = animeInfo;
  const allGenresData = await genreService();
  const sidebarGenreList = allGenresData.ok ? allGenresData.data.genreList.filter((g) => !/^(\d{4}|spring|summer|fall|winter)/i.test(g.title)) : [];
  const title = ok ? `Anime ${data.title} - ${siteName}` : `Error - ${siteName}`;
  const description = ok && data.synopsis?.paragraphs ? data.synopsis.paragraphs[0] : "";
  const lastEpisode = ok && data.episodeList && data.episodeList.length > 0 ? data.episodeList[data.episodeList.length - 1] : null;
  return renderTemplate`${!ok ? renderTemplate`${renderComponent($$result, "Error", $$Error, { "statusCode": statusCode, "message": message || statusMessage })}` : renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": {
    title,
    description
  } }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "currentPage": {
    title: data.title,
    href: Astro2.url.href,
    action: "replace"
  } })}${renderComponent($$result2, "Sesepuh", $$Sesepuh, {}, { "default": async ($$result3) => renderTemplate`${renderComponent($$result3, "Content", $$Content, {}, { "default": async ($$result4) => renderTemplate`${maybeRenderHead()}<div class="relative"><img${addAttribute(data.poster, "src")} class="w-full aspect-[16/6] object-cover rounded-t-md"${addAttribute(data.title, "alt")}><div class="absolute top-0 right-0 bottom-0 left-0 rounded-t-md bg-gradient-to-t from-zinc-100 dark:from-zinc-900 to-transparent"></div></div><div class="flex flex-col sm:flex-row justify-center items-center sm:justify-start gap-4 sm:items-end xs:-mt-[100px] sm:-mt-[150px] relative p-4"><img${addAttribute(data.poster, "src")}${addAttribute(data.title, "alt")} class="w-[150px] sm:w-[170px] md:w-[200px] rounded-md aspect-[3/4]"><div class="flex flex-col gap-3 items-center text-center sm:items-start sm:text-left"><h1 class="text-xl md:text-2xl font-extrabold line-clamp-2">${data.title || data.synonyms}</h1><p class="flex"><span class="flex gap-1 items-center">${renderComponent($$result4, "StarIcon", $$StarIcon, { "class": "w-4 h-4" })}${data.score.value} | ${data.status}</span></p>${lastEpisode && renderTemplate`<a${addAttribute(generateUrlPath("/episode", lastEpisode.episodeId), "href")} class="max-w-min flex gap-1 text-white bg-amber-700 hover:bg-amber-800 focus:outline-none focus:ring-4 focus:ring-amber-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800">${renderComponent($$result4, "PlayIcon", $$PlayIcon, {})}
Tonton
</a>`}</div></div><div class="flex flex-col gap-3">${data.synopsis.paragraphs.map((paragraph) => renderTemplate`<p class="text-zinc-600 dark:text-zinc-400">${paragraph}</p>`)}</div>${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Detail Anime" })}${renderComponent($$result4, "AnimeDetails", $$AnimeDetails, { "anime": data })}${data.batchList.length > 0 && renderTemplate`${renderComponent($$result4, "Fragment", Fragment, {}, { "default": async ($$result5) => renderTemplate`${renderComponent($$result5, "WidgetTitle", $$WidgetTitle, { "title": "Download Batch" })}${data.batchList.map((batch) => renderTemplate`<a${addAttribute(generateUrlPath("/batch", batch.batchId), "href")} class="line-clamp-2 flex gap-1 text-white bg-amber-700 hover:bg-amber-800 focus:outline-none focus:ring-4 focus:ring-amber-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800">${batch.title}</a>`)}` })}`}${data.trailer && renderTemplate`<iframe${addAttribute(data.trailer, "src")} allowfullscreen class="aspect-video rounded-lg"></iframe>`}${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Daftar Episode" })}<div class="flex flex-col gap-4 max-h-[500px] overflow-x-auto">${data.episodeList.map((episode) => {
    const epsTitle = episode.title || `Episode ${episode.episodeId.split("-").pop()}`;
    return renderTemplate`<a${addAttribute(generateUrlPath("/episode", episode.episodeId), "href")} class="flex gap-4 items-center hover:bg-zinc-300 dark:hover:bg-zinc-700 p-2 rounded-md"><div class="text-white py-2 px-4 bg-sky-700 dark:bg-sky-600 rounded-sm min-w-max">${epsTitle}</div><div class="line-clamp-1">${data.title}${epsTitle}</div></a>`;
  })}</div>` })}${renderComponent($$result3, "Sidebar", $$Sidebar, {}, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Daftar Genre", "href": "/genres" })}<div class="flex flex-wrap gap-2 mb-6 max-h-64 overflow-y-auto pr-1 custom-scrollbar">${sidebarGenreList.map((genre) => renderTemplate`<a${addAttribute(generateUrlPath("/genres", genre.genreId), "href")} class="text-xs font-medium px-2.5 py-1.5 rounded bg-zinc-200 text-zinc-800 hover:bg-amber-600 hover:text-white dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-amber-600 transition-colors">${genre.title}</a>`)}</div>${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Sidebar" })}` })}` })}` })}`}`;
}, "/tmp/sanka/src/pages/anime/[animeId]/index.astro", void 0);

const $$file = "/tmp/sanka/src/pages/anime/[animeId]/index.astro";
const $$url = "/anime/[animeId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
