export const GetPage = async (slug) => {
  try {
    const projectRes = await fetch(`${process.env.WP_API}/pages?slug=${slug}`, { next: { revalidate: 10 } });
    const projectHome = await projectRes.json();
    return JSON.stringify(projectHome);
  } catch (error) {
    return new Error(error);
  }
}