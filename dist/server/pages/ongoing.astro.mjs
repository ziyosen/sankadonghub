/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro } from '../chunks/astro/server_Dh1Z2Bpm.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BFg5Q30V.mjs';
import { $ as $$Breadcrumb, a as $$Sesepuh, b as $$Content, c as $$WidgetTitle, d as $$Sidebar } from '../chunks/Sidebar_BHdYpvpW.mjs';
import { a as animeConfig } from '../chunks/animeConfig_Dv_0l7zJ.mjs';
import { s as sanka } from '../chunks/sanka_DSusrVHd.mjs';
import { $ as $$AnimeList2 } from '../chunks/AnimeList2_Rk9nUHw6.mjs';
import { $ as $$Pagination } from '../chunks/Pagination_CkEdU3IL.mjs';
import { $ as $$Error } from '../chunks/Error_P4yMsrwR.mjs';
export { renderers } from '../renderers.mjs';

async function ongoingService(queryParam = {}) {
  const { page } = queryParam;
  const result = await sanka(`/ongoing/${page || 1}`);
  const animeList = (result.data.ongoing_donghua || []).map((item) => ({
    title: item.title,
    poster: item.poster,
    status: item.status,
    type: "anime",
    score: "N/A",
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
  const {
    sankadonghub: { siteName }
  } = animeConfig;
  const page = Astro2.url.searchParams.get("page");
  const ongoing = await ongoingService({ page });
  return renderTemplate`${() => {
    if (ongoing.ok) {
      const title = `Ongoing | anime Sedang Tayang - ${siteName}`;
      return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": {
        title,
        description: ""
      } }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, {})}${renderComponent($$result2, "Sesepuh", $$Sesepuh, {}, { "default": async ($$result3) => renderTemplate`${renderComponent($$result3, "Content", $$Content, {}, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "anime Sedang Tayang" })}${renderComponent($$result4, "AnimeList2", $$AnimeList2, { "anime": {
        list: ongoing.data.animeList,
        baseUrlPath: "/anime"
      } })}${renderComponent($$result4, "Pagination", $$Pagination, { "pagination": ongoing.pagination })}` })}${renderComponent($$result3, "Sidebar", $$Sidebar, {}, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Sidebar" })}` })}` })}` })}`;
    }
    return renderTemplate`${renderComponent($$result, "Error", $$Error, { "statusCode": ongoing.statusCode, "message": ongoing.message || ongoing.statusMessage })}`;
  }}`;
}, "/tmp/sanka/src/pages/ongoing/index.astro", void 0);

const $$file = "/tmp/sanka/src/pages/ongoing/index.astro";
const $$url = "/ongoing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
