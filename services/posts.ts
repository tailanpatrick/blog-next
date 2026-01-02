import api from '@/lib/axios';

export async function getPosts() {
  const res = await api.get('/posts');

  return res.data;
}

export async function getPost(slug: string) {
  if (!slug) return;

  const res = await api.get(`/posts?filters[slug][$eq]=${slug}&populate=*`);

  return res.data;
}
