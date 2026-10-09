/* empty css                                    */
import { e as createComponent, m as maybeRenderHead, g as addAttribute, k as renderComponent, l as Fragment, r as renderTemplate, n as renderScript, h as createAstro, o as defineScriptVars } from '../../chunks/astro/server_Dh1Z2Bpm.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_BFg5Q30V.mjs';
import { $ as $$Breadcrumb, a as $$Sesepuh, b as $$Content, c as $$WidgetTitle, d as $$Sidebar } from '../../chunks/Sidebar_BHdYpvpW.mjs';
import { a as animeConfig } from '../../chunks/animeConfig_Dv_0l7zJ.mjs';
import { g as generateUrlPath } from '../../chunks/generateUrlPath_Bu-CsIBe.mjs';
import { $ as $$DownloadLink } from '../../chunks/DownloadLink_BBPZ7_Fy.mjs';
import { $ as $$Error } from '../../chunks/Error_P4yMsrwR.mjs';
import 'clsx';
import { s as sanka } from '../../chunks/sanka_DSusrVHd.mjs';
import { g as genreService } from '../../chunks/genreService_DeDh8SHo.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro();
const $$VideoPlayer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$VideoPlayer;
  const { anime } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<select id="servers" class="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"> <option selected${addAttribute(anime.defaultStreamingUrl, "value")} id="default-server">Server Bawaan</option> ${anime.server.qualities.map((quality) => {
    if (quality.serverList && quality.serverList.length > 0) {
      return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate` <option disabled>${quality.title}</option> ${quality.serverList?.map((server) => renderTemplate`<option${addAttribute(server.serverId, "value")}>${server.title}</option>`)}` })}`;
    }
  })} </select> <div id="video-player-wrapper" class="flex justify-center items-center aspect-video bg-zinc-300 dark:bg-zinc-700 rounded-lg overflow-hidden"> ${anime.defaultStreamingUrl.toLowerCase() === "no iframe found" ? renderTemplate`<h5 class="text-lg font-extrabold">Server Tidak Tersedia</h5>` : anime.defaultStreamingUrl.endsWith(".mp4") ? renderTemplate`<video id="video-player-video" class="w-full h-full" controls${addAttribute(anime.defaultStreamingUrl, "src")}></video>` : renderTemplate`<iframe id="video-player-iframe"${addAttribute(anime.defaultStreamingUrl, "src")} allowfullscreen class="w-full h-full"></iframe>`} </div> ${renderScript($$result, "/tmp/sanka/src/components/VideoPlayer.astro?astro&type=script&index=0&lang.ts")}`;
}, "/tmp/sanka/src/components/VideoPlayer.astro", void 0);

const $$Astro$1 = createAstro();
const $$AnimeList3 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AnimeList3;
  const {
    anime: { list, baseUrlPath }
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-8 py-3"> ${list.map((anime) => renderTemplate`<div class="flex gap-4"> <a${addAttribute(generateUrlPath(baseUrlPath, anime.animeId), "href")}> <img loading="lazy" class="anime3-item-img"${addAttribute(anime.poster, "src")}${addAttribute(anime.title, "alt")}> </a> <div class="flex flex-col gap-2"> <h3 class="anime3-item-title"> <a${addAttribute(generateUrlPath(baseUrlPath, anime.animeId), "href")}> ${anime.title} </a> </h3> <div class="text-sm line-clamp-2"> <span class="font-bold">Genres : </span> ${anime.genreList.map((genre, index) => renderTemplate`<a${addAttribute(generateUrlPath("/genres", genre.genreId), "href")} class="hover:text-amber-700 dark:hover:text-amber-500"> ${index !== anime.genreList.length - 1 ? `${genre.title},` : genre.title} </a>`)} </div> <p class="anime3-item-date">${anime.releaseDate}</p> </div> </div>`)} </div>`;
}, "/tmp/sanka/src/components/AnimeList3.astro", void 0);

async function episodeService(routeParams) {
  const { episodeId } = routeParams;
  const result = await sanka(`/episode/${episodeId}`);
  const raw = result.data;
  const details = raw.donghua_details || {};
  const serverList = (raw.streaming?.servers || []).map((s) => ({
    title: s.name,
    serverId: s.url
  }));
  if (raw.streaming?.main_url) {
    serverList.unshift({
      title: raw.streaming.main_url.name,
      serverId: raw.streaming.main_url.url
    });
  }
  const formats = [];
  if (raw.download_url) {
    for (const [key, val] of Object.entries(raw.download_url)) {
      const title = key.replace("download_url_", "");
      const urls = [];
      if (typeof val === "object" && val !== null) {
        for (const [host, link] of Object.entries(val)) {
          urls.push({ title: host, url: link });
        }
      }
      formats.push({
        title,
        qualities: [{ title, urls }]
      });
    }
  }
  const mappedData = {
    title: raw.episode,
    animeId: details.slug,
    poster: details.poster,
    releasedOn: details.released,
    defaultStreamingUrl: raw.streaming?.main_url?.url || "",
    server: {
      qualities: [
        {
          title: "Servers",
          serverList
        }
      ]
    },
    hasPrevEpisode: !!raw.navigation?.previous_episode,
    prevEpisode: raw.navigation?.previous_episode ? {
      title: raw.navigation.previous_episode.episode,
      episodeId: raw.navigation.previous_episode.slug
    } : null,
    hasNextEpisode: !!raw.navigation?.next_episode,
    nextEpisode: raw.navigation?.next_episode ? {
      title: raw.navigation.next_episode.episode,
      episodeId: raw.navigation.next_episode.slug
    } : null,
    downloadUrl: { formats },
    synopsis: { paragraphs: [] },
    genreList: [],
    recommendedEpisodeList: [],
    movie: { animeList: [] }
  };
  return { ...result, data: mappedData };
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const config = animeConfig.default || animeConfig;
  const {
    sankadonghub: { siteName }
  } = config;
  const { episodeId } = Astro2.params;
  const episodeResult = await episodeService({ episodeId });
  const { data, ok, statusCode, message, statusMessage } = episodeResult;
  const allGenresData = await genreService();
  const sidebarGenreList = allGenresData.ok ? allGenresData.data.genreList.filter((g) => !/^(\d{4}|spring|summer|fall|winter)/i.test(g.title)) : [];
  const title = ok ? `Nonton Anime ${data.title} - ${siteName}` : `Error - ${siteName}`;
  return renderTemplate`${!ok ? renderTemplate`${renderComponent($$result, "Error", $$Error, { "statusCode": statusCode, "message": message || statusMessage })}` : renderTemplate(_a || (_a = __template(["", "\n    <script>(function(){", '\n      const historyKey = "sankadonghub_history";\n      try {\n        const currentHistory = JSON.parse(localStorage.getItem(historyKey) || "[]");\n        const newEntry = {\n          title: episodeTitle,\n          poster: poster,\n          href: href,\n          episode: episodeLabel.replace(/.*(Episode\\s+\\d+).*/i, "$1") || "Tonton", // Ambil string "Episode X"\n          timestamp: new Date().getTime(),\n        };\n        const filteredHistory = currentHistory.filter(item => item.href !== href);\n        filteredHistory.unshift(newEntry);\n        \n        if (filteredHistory.length > 20) {\n          filteredHistory.pop();\n        }\n\n        localStorage.setItem(historyKey, JSON.stringify(filteredHistory));\n      } catch (e) {\n        console.error("Gagal menyimpan history", e);\n      }\n    })();<\/script>'], ["", "\n    <script>(function(){", '\n      const historyKey = "sankadonghub_history";\n      try {\n        const currentHistory = JSON.parse(localStorage.getItem(historyKey) || "[]");\n        const newEntry = {\n          title: episodeTitle,\n          poster: poster,\n          href: href,\n          episode: episodeLabel.replace(/.*(Episode\\\\s+\\\\d+).*/i, "$1") || "Tonton", // Ambil string "Episode X"\n          timestamp: new Date().getTime(),\n        };\n        const filteredHistory = currentHistory.filter(item => item.href !== href);\n        filteredHistory.unshift(newEntry);\n        \n        if (filteredHistory.length > 20) {\n          filteredHistory.pop();\n        }\n\n        localStorage.setItem(historyKey, JSON.stringify(filteredHistory));\n      } catch (e) {\n        console.error("Gagal menyimpan history", e);\n      }\n    })();<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "seo": { title, description: "" } }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "currentPage": {
    title: data.title,
    href: Astro2.url.href,
    action: "replace"
  } })}${renderComponent($$result2, "Sesepuh", $$Sesepuh, {}, { "default": async ($$result3) => renderTemplate`${renderComponent($$result3, "Content", $$Content, {}, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": data.title })}${renderComponent($$result4, "VideoPlayer", $$VideoPlayer, { "anime": {
    defaultStreamingUrl: data.defaultStreamingUrl,
    server: data.server
  } })}${maybeRenderHead()}<div class="flex flex-wrap justify-center gap-4 my-4">${data.hasPrevEpisode && data.prevEpisode && renderTemplate`<a${addAttribute(generateUrlPath("/episode", data.prevEpisode.episodeId), "href")} class="navigation-episode-item">${"<- "}${data.prevEpisode.title}</a>`}<a${addAttribute(generateUrlPath("/anime", data.animeId), "href")} class="navigation-episode-item">
All Eps
</a>${data.hasNextEpisode && data.nextEpisode && renderTemplate`<a${addAttribute(generateUrlPath("/episode", data.nextEpisode.episodeId), "href")} class="navigation-episode-item">${data.nextEpisode.title}${" ->"}</a>`}</div>${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Link Download" })}${renderComponent($$result4, "DownloadLink", $$DownloadLink, { "anime": { downloadUrl: data.downloadUrl } })}` })}${renderComponent($$result3, "Sidebar", $$Sidebar, {}, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Daftar Genre", "href": "/genres" })}<div class="flex flex-wrap gap-2 mb-6 max-h-64 overflow-y-auto pr-1 custom-scrollbar">${sidebarGenreList.map((genre) => renderTemplate`<a${addAttribute(generateUrlPath("/genres", genre.genreId), "href")} class="text-xs font-medium px-2.5 py-1.5 rounded bg-zinc-200 text-zinc-800 hover:bg-amber-600 hover:text-white dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-amber-600 transition-colors">${genre.title}</a>`)}</div>${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Anime Movie", "href": "/movies" })}${renderComponent($$result4, "AnimeList3", $$AnimeList3, { "anime": {
    list: data.movie.animeList,
    baseUrlPath: "/anime"
  } })}` })}` })}` }), defineScriptVars({
    episodeTitle: data.title,
    poster: data.poster,
    href: Astro2.url.pathname,
    episodeLabel: data.title
  }))}`;
}, "/tmp/sanka/src/pages/episode/[episodeId]/index.astro", void 0);

const $$file = "/tmp/sanka/src/pages/episode/[episodeId]/index.astro";
const $$url = "/episode/[episodeId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
