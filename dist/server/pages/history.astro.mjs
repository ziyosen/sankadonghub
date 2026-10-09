/* empty css                                 */
import { e as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Dh1Z2Bpm.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BFg5Q30V.mjs';
import { $ as $$Breadcrumb, a as $$Sesepuh, b as $$Content, c as $$WidgetTitle, d as $$Sidebar } from '../chunks/Sidebar_BHdYpvpW.mjs';
import { a as animeConfig } from '../chunks/animeConfig_Dv_0l7zJ.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const {
    sankadonghub: { siteName }
  } = animeConfig;
  const title = `Riwayat Menonton - ${siteName}`;
  return renderTemplate(_a || (_a = __template(["", ' <script>\n  const historyKey = "sankadonghub_history";\n  const historyContainer = document.getElementById("history-list");\n  const emptyMsg = document.getElementById("empty-msg");\n  const clearBtn = document.getElementById("clear-history");\n\n  function renderHistory() {\n    const historyData = JSON.parse(localStorage.getItem(historyKey) || "[]");\n\n    if (historyData.length === 0) {\n      if (historyContainer) historyContainer.innerHTML = "";\n      if (emptyMsg) emptyMsg.classList.remove("hidden");\n      if (clearBtn) clearBtn.classList.add("hidden");\n      return;\n    }\n\n    if (emptyMsg) emptyMsg.classList.add("hidden");\n    if (clearBtn) clearBtn.classList.remove("hidden");\n\n    if (historyContainer) {\n      historyContainer.innerHTML = historyData\n        .map(\n          (item) => `\n        <a href="${item.href}" class="group relative">\n          <div class="relative overflow-hidden rounded-lg">\n            <img\n              loading="lazy"\n              class="anime1-item-img"\n              src="${item.poster}"\n              alt="${item.title}"\n            />\n            <span class="anime1-item-eps">${item.episode}</span>\n            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>\n          </div>\n          <div class="p-2">\n            <h3 class="anime1-item-title">${item.title}</h3>\n            <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1 text-center">\n              ${new Date(item.timestamp).toLocaleDateString(\'id-ID\', { day: \'numeric\', month: \'short\' })}\n            </p>\n          </div>\n        </a>\n      `\n        )\n        .join("");\n    }\n  }\n\n  renderHistory();\n  \n  if (clearBtn) {\n    clearBtn.addEventListener("click", () => {\n      if (confirm("Yakin ingin menghapus semua riwayat?")) {\n        localStorage.removeItem(historyKey);\n        renderHistory();\n      }\n    });\n  }\n<\/script>'], ["", ' <script>\n  const historyKey = "sankadonghub_history";\n  const historyContainer = document.getElementById("history-list");\n  const emptyMsg = document.getElementById("empty-msg");\n  const clearBtn = document.getElementById("clear-history");\n\n  function renderHistory() {\n    const historyData = JSON.parse(localStorage.getItem(historyKey) || "[]");\n\n    if (historyData.length === 0) {\n      if (historyContainer) historyContainer.innerHTML = "";\n      if (emptyMsg) emptyMsg.classList.remove("hidden");\n      if (clearBtn) clearBtn.classList.add("hidden");\n      return;\n    }\n\n    if (emptyMsg) emptyMsg.classList.add("hidden");\n    if (clearBtn) clearBtn.classList.remove("hidden");\n\n    if (historyContainer) {\n      historyContainer.innerHTML = historyData\n        .map(\n          (item) => \\`\n        <a href="\\${item.href}" class="group relative">\n          <div class="relative overflow-hidden rounded-lg">\n            <img\n              loading="lazy"\n              class="anime1-item-img"\n              src="\\${item.poster}"\n              alt="\\${item.title}"\n            />\n            <span class="anime1-item-eps">\\${item.episode}</span>\n            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>\n          </div>\n          <div class="p-2">\n            <h3 class="anime1-item-title">\\${item.title}</h3>\n            <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1 text-center">\n              \\${new Date(item.timestamp).toLocaleDateString(\'id-ID\', { day: \'numeric\', month: \'short\' })}\n            </p>\n          </div>\n        </a>\n      \\`\n        )\n        .join("");\n    }\n  }\n\n  renderHistory();\n  \n  if (clearBtn) {\n    clearBtn.addEventListener("click", () => {\n      if (confirm("Yakin ingin menghapus semua riwayat?")) {\n        localStorage.removeItem(historyKey);\n        renderHistory();\n      }\n    });\n  }\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "seo": {
    title,
    description: "Riwayat nonton anime di Sankadonghub"
  } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, {})} ${renderComponent($$result2, "Sesepuh", $$Sesepuh, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Content", $$Content, {}, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div class="flex justify-between items-center"> ${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Riwayat Menonton" })} <button id="clear-history" class="text-xs text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 font-bold">
Hapus Semua
</button> </div> <div id="history-list" class="py-3 gap-4 grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4"></div> <div id="empty-msg" class="hidden text-center py-10 text-zinc-500">
Belum ada riwayat menonton.
</div> ` })} ${renderComponent($$result3, "Sidebar", $$Sidebar, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Sidebar" })} ` })} ` })} ` }));
}, "/tmp/sanka/src/pages/history/index.astro", void 0);

const $$file = "/tmp/sanka/src/pages/history/index.astro";
const $$url = "/history";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
