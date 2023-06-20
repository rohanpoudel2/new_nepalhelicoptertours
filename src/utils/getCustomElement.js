export const GetElement = async (id) => {
  try {
    const articlesRes = await fetch(`${process.env.WP_API}/custom_packages/${id}?_embed`, { next: { revalidate: 10 } });
    const projectHome = await articlesRes.json();
    return JSON.stringify(projectHome);
  } catch (error) {
    return new Error(error);
  }
}