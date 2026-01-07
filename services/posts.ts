import { fetcher } from '@/config/fetcher';
import { PostData } from '@/types/PostTypes';

type StrapiResponse<T> = {
  data: T;
};

export async function getPosts(): Promise<PostData[]> {
  const res = await fetcher<StrapiResponse<PostData[]>>(`/posts?populate=*`);

  return res.data;
}

export async function getPost(slug: string): Promise<PostData | null> {
  if (!slug) return null;

  const res = await fetcher<StrapiResponse<PostData[]>>(
    `/posts?filters[slug][$eq]=${slug}&populate=*`,
  );

  return res.data[0] ?? null;
}
