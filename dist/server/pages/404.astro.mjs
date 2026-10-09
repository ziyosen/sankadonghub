/* empty css                                 */
import { e as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_Dh1Z2Bpm.mjs';
import 'piccolore';
import { $ as $$Error } from '../chunks/Error_P4yMsrwR.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Error", $$Error, { "statusCode": 404, "message": "Halaman Tidak Ditemukan" })}`;
}, "/tmp/sanka/src/pages/404.astro", void 0);

const $$file = "/tmp/sanka/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
