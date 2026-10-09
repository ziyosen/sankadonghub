import { s as sanka } from './sanka_DSusrVHd.mjs';

async function genreService() {
  const result = await sanka("/genres");
  const genreList = (result.data.data || []).map((item) => ({
    title: item.name,
    genreId: item.slug
  }));
  return { ...result, data: { genreList } };
}

export { genreService as g };
