import { a as animeConfig } from './animeConfig_Dv_0l7zJ.mjs';
import { g as generateUrlPath } from './generateUrlPath_Bu-CsIBe.mjs';

const config = animeConfig.default || animeConfig;
const {
  sankadonghubApi: { apiUrl, baseUrlPath }
} = config;
async function sanka(pathname) {
  const fullPath = generateUrlPath(baseUrlPath, pathname);
  const url = new URL(fullPath, apiUrl).href;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return {
        statusCode: response.status,
        statusMessage: response.statusText,
        message: "Fetch error",
        ok: false,
        data: {},
        pagination: null
      };
    }
    const result = await response.json();
    return {
      statusCode: 200,
      statusMessage: "OK",
      message: "Success",
      ok: result.status === "success" || Array.isArray(result) || !!result,
      data: result,
      pagination: null
    };
  } catch (error) {
    console.error(`Error fetching ${url}:`, error);
    return {
      statusCode: 500,
      statusMessage: "Internal Server Error",
      message: "Failed to fetch data",
      ok: false,
      data: {},
      pagination: null
    };
  }
}

export { sanka as s };
