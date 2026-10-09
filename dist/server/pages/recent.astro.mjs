/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro } from '../chunks/astro/server_Dh1Z2Bpm.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BFg5Q30V.mjs';
import { $ as $$Breadcrumb, a as $$Sesepuh, b as $$Content, c as $$WidgetTitle, d as $$Sidebar } from '../chunks/Sidebar_BHdYpvpW.mjs';
import { a as animeConfig } from '../chunks/animeConfig_Dv_0l7zJ.mjs';
import { $ as $$AnimeList1 } from '../chunks/AnimeList1_ndZNGEYy.mjs';
import { s as sanka } from '../chunks/sanka_DSusrVHd.mjs';
import { $ as $$Pagination } from '../chunks/Pagination_CkEdU3IL.mjs';
import { $ as $$Error } from '../chunks/Error_P4yMsrwR.mjs';
export { renderers } from '../renderers.mjs';

async function recentService(queryParam = {}) {
  const { page } = queryParam;
  const result = await sanka(`/latest/${page || 1}`);
  const animeList = (result.data.latest_donghua || []).map((item) => ({
    title: item.title,
    poster: item.poster,
    episodes: (item.current_episode || "??").replace(/Ep\s*/i, "").trim(),
    releasedOn: "Baru",
    animeId: item.slug,
    href: `/episode/${item.slug}`
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
  const recent = await recentService({ page });
  return renderTemplate`${() => {
    if (recent.ok) {
      const title = `Recent | Episode Terbaru - ${siteName}`;
      return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": {
        title,
        description: ""
      } }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, {})}${renderComponent($$result2, "Sesepuh", $$Sesepuh, {}, { "default": async ($$result3) => renderTemplate`${renderComponent($$result3, "Content", $$Content, {}, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Episode Terbaru" })}${renderComponent($$result4, "AnimeList1", $$AnimeList1, { "anime": {
        list: recent.data.animeList,
        baseUrlPath: "/anime"
      } })}${renderComponent($$result4, "Pagination", $$Pagination, { "pagination": recent.pagination })}` })}${renderComponent($$result3, "Sidebar", $$Sidebar, {}, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Sidebar" })}` })}` })}` })}`;
    }
    return renderTemplate`${renderComponent($$result, "Error", $$Error, { "statusCode": recent.statusCode, "message": recent.message || recent.statusMessage })}`;
  }}`;
}, "/tmp/sanka/src/pages/recent/index.astro", void 0);

const $$file = "/tmp/sanka/src/pages/recent/index.astro";
const $$url = "/recent";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
