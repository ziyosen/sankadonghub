/* empty css                                 */
import { e as createComponent, m as maybeRenderHead, g as addAttribute, k as renderComponent, r as renderTemplate, h as createAstro } from '../chunks/astro/server_Dh1Z2Bpm.mjs';
import 'piccolore';
import { s as sanka } from '../chunks/sanka_DSusrVHd.mjs';
import { g as genreService } from '../chunks/genreService_DeDh8SHo.mjs';
import { a as animeConfig } from '../chunks/animeConfig_Dv_0l7zJ.mjs';
import { $ as $$Breadcrumb, a as $$Sesepuh, b as $$Content, c as $$WidgetTitle, d as $$Sidebar } from '../chunks/Sidebar_BHdYpvpW.mjs';
import { $ as $$Layout } from '../chunks/Layout_BFg5Q30V.mjs';
import { $ as $$PlayIcon } from '../chunks/PlayIcon_BRUAaIaZ.mjs';
import { g as generateUrlPath } from '../chunks/generateUrlPath_Bu-CsIBe.mjs';
import { $ as $$AnimeList1 } from '../chunks/AnimeList1_ndZNGEYy.mjs';
import { $ as $$Error } from '../chunks/Error_P4yMsrwR.mjs';
export { renderers } from '../renderers.mjs';

async function homeService() {
  const result = await sanka("/home/1");
  const recentList = (result.data.latest_release || []).map((item) => {
    const eps = (item.current_episode || "??").replace(/Ep\s*/i, "").trim();
    return {
      title: item.title,
      poster: item.poster,
      episodes: eps,
      releasedOn: "Baru",
      animeId: item.slug,
      href: `/episode/${item.slug}`
    };
  });
  const completedList = (result.data.completed_donghua || []).map((item) => ({
    title: item.title,
    poster: item.poster,
    episodes: "END",
    releasedOn: "Tamat",
    batchId: item.slug,
    animeId: item.slug,
    href: `/anime/${item.slug}`
  }));
  const movieList = [];
  const mappedData = {
    recent: {
      animeList: recentList
    },
    batch: {
      batchList: completedList
    },
    movie: {
      animeList: movieList
    }
  };
  return { ...result, data: mappedData };
}

async function azListService() {
  const result = await sanka("/az-list");
  return result;
}

const $$Astro$1 = createAstro();
const $$Carousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Carousel;
  const {
    anime: { list, baseUrlPath }
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="controls-carousel" class="relative w-full" data-carousel="slide" data-carousel-interval="6000"> <div class="relative h-56 overflow-hidden rounded-md md:h-96"> ${list.map((anime) => renderTemplate`<div class="hidden carousel-item" data-carousel-item> <div> <img loading="lazy"${addAttribute(anime.poster, "src")} class="carousel-item-image"${addAttribute(anime.title, "alt")}> </div> <div class="carousel-item-layer"> <div class="carousel-item-cus"> <p class="carousel-item-eps"> <span class="text-teal-600">Episode ${anime.episodes}</span> </p> <h1 class="carousel-item-title"> ${anime.title.replace(`Episode ${anime.episodes}`, "").trim()} </h1> <a${addAttribute(generateUrlPath(baseUrlPath, anime.animeId || ""), "href")} class="carousel-item-btn"> ${renderComponent($$result, "PlayIcon", $$PlayIcon, {})} <span class="text-xs">Tonton Kuy</span> </a> </div> </div> </div>`)} </div> <div class="absolute z-30 flex md:gap-10 -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2"> <button type="button" class="flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev> <span class="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-zinc-600 dark:bg-zinc-800/30 dark:group-hover:bg-zinc-800/50 dark:group-focus:ring-4 dark:group-focus:ring-zinc-500"> <svg class="w-4 h-4 text-zinc-700 rtl:rotate-180 dark:text-zinc-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"></path> </svg> <span class="sr-only">Previous</span> </span> </button> <button type="button" class="flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next> <span class="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-zinc-600 dark:bg-zinc-800/30 dark:group-hover:bg-zinc-800/50 dark:group-focus:ring-4 dark:group-focus:ring-zinc-500"> <svg class="w-4 h-4 text-zinc-700 rtl:rotate-180 dark:text-zinc-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path> </svg> <span class="sr-only">Next</span> </span> </button> </div> </div>`;
}, "/tmp/sanka/src/components/Carousel.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const config = animeConfig.default || animeConfig;
  const {
    sankadonghub: { siteName, description, image }
  } = config;
  const home = await homeService();
  const { ok, data, statusCode, message, statusMessage } = home;
  const azData = await azListService();
  const azList = azData.ok ? azData.data.az_list_letters : [];
  const genreData = await genreService();
  const allGenres = genreData.ok ? genreData.data.genreList : [];
  const seasonList = allGenres.filter((g) => /^\d{4}|spring|summer|fall|winter/i.test(g.title)).sort((a, b) => b.title.localeCompare(a.title));
  const genreListOnly = allGenres.filter((g) => !/^\d{4}|spring|summer|fall|winter/i.test(g.title));
  return renderTemplate`${!ok ? renderTemplate`${renderComponent($$result, "Error", $$Error, { "statusCode": statusCode, "message": message || statusMessage })}` : renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": {
    title: `${siteName} - Nonton Streaming & Download Donghua Sub Indo Gratis`,
    description,
    openGraph: {
      basic: {
        title: `${siteName}`,
        image: `${Astro2.url.origin + image}`,
        type: "website"
      }
    }
  } }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "Carousel", $$Carousel, { "anime": {
    list: data.recent.animeList.slice(0, 5),
    baseUrlPath: "/episode"
  } })}${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, {})}${renderComponent($$result2, "Sesepuh", $$Sesepuh, {}, { "default": async ($$result3) => renderTemplate`${renderComponent($$result3, "Content", $$Content, {}, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Episode Terbaru", "href": "/recent" })}${renderComponent($$result4, "AnimeList1", $$AnimeList1, { "anime": {
    list: data.recent.animeList,
    baseUrlPath: "/episode"
  } })}${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Download Batch Donghua", "href": "/batch" })}${renderComponent($$result4, "AnimeList1", $$AnimeList1, { "anime": {
    list: data.batch.batchList,
    baseUrlPath: "/batch"
  } })}` })}${renderComponent($$result3, "Sidebar", $$Sidebar, {}, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Seasons" })}${maybeRenderHead()}<div class="flex flex-wrap gap-2 mb-6 max-h-60 overflow-y-auto pr-1 custom-scrollbar">${seasonList.map((season) => renderTemplate`<a${addAttribute(generateUrlPath("/genres", season.genreId), "href")} class="text-xs font-medium px-2.5 py-1.5 rounded bg-zinc-200 text-zinc-800 hover:bg-amber-600 hover:text-white dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-amber-600 transition-colors">${season.title}</a>`)}</div>${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Daftar Genre" })}<div class="flex flex-wrap gap-2 mb-6 max-h-60 overflow-y-auto pr-1 custom-scrollbar">${genreListOnly.map((genre) => renderTemplate`<a${addAttribute(generateUrlPath("/genres", genre.genreId), "href")} class="text-xs font-medium px-2.5 py-1.5 rounded bg-zinc-200 text-zinc-800 hover:bg-amber-600 hover:text-white dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-amber-600 transition-colors">${genre.title}</a>`)}</div>${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "A-Z List" })}<div class="flex flex-wrap gap-2 max-h-60 overflow-y-auto pr-1 custom-scrollbar">${azList.map((item) => renderTemplate`<a${addAttribute(generateUrlPath("/az-list", item.slug), "href")} class="w-8 h-8 flex items-center justify-center text-sm font-bold rounded bg-zinc-200 text-zinc-800 hover:bg-sky-600 hover:text-white dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-sky-600 transition-colors">${item.letter}</a>`)}</div>` })}` })}` })}`}`;
}, "/tmp/sanka/src/pages/index.astro", void 0);

const $$file = "/tmp/sanka/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
