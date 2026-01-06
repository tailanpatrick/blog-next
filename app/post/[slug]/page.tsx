import Image from 'next/image';
import RichTextRenderer from '@/components/RichTextRenderer';
import { getPost, getPosts } from '@/services/posts';
import { notFound } from 'next/navigation';
import { formatDate } from '@/utils/formateDate';
import { PostData } from '@/types/PostTypes';

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({ slug: post.slug }));
}

const Post = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;

  try {
    const response = await getPost(slug);

    if (response === null) {
      notFound();
    }

    console.log(slug);

    const post = response as PostData;
    const postContent = post.content;
    const author = post?.author?.name;
    const imageUrl = post.cover.url;
    const title = post.title;
    const date = formatDate(post.publishedAt);

    return (
      <div className="flex flex-col md:justify-center w-full">
        <div className="w-full flex md:justify-center">
          <Image
            src={imageUrl}
            width={800}
            height={800}
            alt="Imagem do Post"
            className="w-full md:w-[963] md:h-[380.37] mb-10"
          />
        </div>
        <div className="md:ml-10 text-[#2D3748] px-6 md:px-24 py-1">
          <h1 className="text-2xl md:text-[45px] tracking-tight leading-tight md:leading-normal font-bold">
            {title}
          </h1>
          <div className="flex md:flex-row flex-col gap-2 md:gap-8 mb-5 mt-3">
            <span className="font-bold text-md md:text-lg">
              Escrito por {author}
            </span>
            <span className="text-[#718096] text-sm md:text-lg first-letter:uppercase">
              {date}
            </span>
          </div>
          <hr className="text-gray-300 max-w-6xl" />

          <RichTextRenderer content={postContent} />
        </div>
      </div>
    );
  } catch (error) {
    //console.log(error);
    notFound();
  }
};
export default Post;
