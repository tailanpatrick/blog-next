import api from '@/lib/axios';
import { PostData } from '@/types/PostTypes';

export async function getPosts(): Promise<PostData[]> {
  const res = await api.get('/posts?populate=*');

  return res.data.data;
}

export async function getPost(slug: string) {
  if (!slug) return;

  const res = await api.get(`/posts?filters[slug][$eq]=${slug}&populate=*`);

  return res.data;
}
