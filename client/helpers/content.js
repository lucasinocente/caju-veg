const getAllPages = async () => {
  const res = await fetch(`${process.env.SITE_URL}/api/paginas`);
  const json = await res.json();

  const pages = {
    produtos: json.filter(({ secao }) => secao === 'produtos'),
    comoFunciona: json.filter(({ secao }) => secao === 'como-funciona'),
  }

  return pages;
}

const getPageBySlug = async slug => {
  const res = await fetch(`${process.env.SITE_URL}/api/paginas/${slug}`);
  const json = await res.json();

  return json;
}

export {
  getAllPages,
  getPageBySlug,
}