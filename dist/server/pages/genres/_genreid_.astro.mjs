/* empty css                                    */
import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute } from '../../chunks/astro/server_Dh1Z2Bpm.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_BFg5Q30V.mjs';
import { $ as $$Breadcrumb, a as $$Sesepuh, b as $$Content, c as $$WidgetTitle, d as $$Sidebar } from '../../chunks/Sidebar_BHdYpvpW.mjs';
import { a as animeConfig } from '../../chunks/animeConfig_Dv_0l7zJ.mjs';
import { s as sanka } from '../../chunks/sanka_DSusrVHd.mjs';
import { g as genreService } from '../../chunks/genreService_DeDh8SHo.mjs';
import { $ as $$AnimeList2 } from '../../chunks/AnimeList2_Rk9nUHw6.mjs';
import { $ as $$Pagination } from '../../chunks/Pagination_CkEdU3IL.mjs';
import { $ as $$Error } from '../../chunks/Error_P4yMsrwR.mjs';
import { g as generateUrlPath } from '../../chunks/generateUrlPath_Bu-CsIBe.mjs';
export { renderers } from '../../renderers.mjs';

async function animeByGenreService(routeParams, queryParam) {
  const { genreId } = routeParams;
  const { page } = queryParam;
  const isSeason = /^(\d{4}|(spring|summer|fall|winter)(-|\s)?\d{4}?)/i.test(genreId);
  let endpoint = "";
  if (isSeason) {
    endpoint = `/seasons/${genreId}`;
  } else {
    endpoint = `/genres/${genreId}/${page || 1}`;
  }
  const result = await sanka(endpoint);
  const rawData = result.data || {};
  const list = rawData.data || rawData.anime_list || rawData.donghua_list || rawData.results || [];
  const animeList = list.map((item) => ({
    title: item.title,
    poster: item.poster,
    status: item.status,
    type: item.type || "anime",
    score: item.rating ? String(item.rating) : "N/A",
    animeId: item.slug,
    href: `/anime/${item.slug}`,
    genreList: []
  }));
  return { ...result, data: { animeList } };
}

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const config = animeConfig.default || animeConfig;
  const {
    sankadonghub: { siteName }
  } = config;
  const { genreId } = Astro2.params;
  const page = Astro2.url.searchParams.get("page");
  const animeByGenre = await animeByGenreService({ genreId }, { page });
  const allGenresData = await genreService();
  const genreList = allGenresData.ok ? allGenresData.data.genreList.filter((g) => !/^(\d{4}|spring|summer|fall|winter)/i.test(g.title)) : [];
  return renderTemplate`${() => {
    if (animeByGenre.ok) {
      const displayTitle = genreId.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
      const title = `anime ${displayTitle} - ${siteName}`;
      return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": {
        title,
        description: `Nonton Donghua Genre ${displayTitle} Subtitle Indonesia`
      } }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, {})}${renderComponent($$result2, "Sesepuh", $$Sesepuh, {}, { "default": async ($$result3) => renderTemplate`${renderComponent($$result3, "Content", $$Content, {}, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": `anime: ${displayTitle}` })}${renderComponent($$result4, "AnimeList2", $$AnimeList2, { "anime": {
        list: animeByGenre.data.animeList,
        baseUrlPath: "/anime"
      } })}${renderComponent($$result4, "Pagination", $$Pagination, { "pagination": animeByGenre.pagination })}` })}${renderComponent($$result3, "Sidebar", $$Sidebar, {}, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Daftar Genre", "href": "/genres" })}${maybeRenderHead()}<div class="flex flex-wrap gap-2">${genreList.map((genre) => renderTemplate`<a${addAttribute(generateUrlPath("/genres", genre.genreId), "href")} class="text-xs font-medium px-2.5 py-1.5 rounded bg-zinc-200 text-zinc-800 hover:bg-amber-600 hover:text-white dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-amber-600 transition-colors">${genre.title}</a>`)}</div>` })}` })}` })}`;
    }
    return renderTemplate`${renderComponent($$result, "Error", $$Error, { "statusCode": animeByGenre.statusCode, "message": animeByGenre.message || animeByGenre.statusMessage })}`;
  }}`;
}, "/tmp/sanka/src/pages/genres/[genreId]/index.astro", void 0);

const $$file = "/tmp/sanka/src/pages/genres/[genreId]/index.astro";
const $$url = "/genres/[genreId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
