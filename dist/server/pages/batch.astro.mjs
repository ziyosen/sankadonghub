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

async function batchService(queryParam = {}) {
  const { page } = queryParam;
  const result = await sanka(`/completed/${page || 1}`);
  const batchList = (result.data.completed_donghua || []).map((item) => ({
    title: item.title,
    poster: item.poster,
    status: item.status,
    type: item.type,
    score: "N/A",
    animeId: item.slug,
    batchId: item.slug,
    genreList: []
  }));
  return { ...result, data: { batchList } };
}

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const {
    sankadonghub: { siteName }
  } = animeConfig;
  const page = Astro2.url.searchParams.get("page");
  const batch = await batchService({ page });
  return renderTemplate`${() => {
    if (batch.ok) {
      const title = `Batch | Download Batch anime - ${siteName}`;
      return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": {
        title,
        description: ""
      } }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, {})}${renderComponent($$result2, "Sesepuh", $$Sesepuh, {}, { "default": async ($$result3) => renderTemplate`${renderComponent($$result3, "Content", $$Content, {}, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Download Batch anime" })}${renderComponent($$result4, "AnimeList2", $$AnimeList2, { "anime": {
        list: batch.data.batchList,
        baseUrlPath: "/batch"
      } })}${renderComponent($$result4, "Pagination", $$Pagination, { "pagination": batch.pagination })}` })}${renderComponent($$result3, "Sidebar", $$Sidebar, {}, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Sidebar" })}` })}` })}` })}`;
    }
    return renderTemplate`${renderComponent($$result, "Error", $$Error, { "statusCode": batch.statusCode, "message": batch.message || batch.statusMessage })}`;
  }}`;
}, "/tmp/sanka/src/pages/batch/index.astro", void 0);

const $$file = "/tmp/sanka/src/pages/batch/index.astro";
const $$url = "/batch";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
