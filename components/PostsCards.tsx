import PostCard from '@/components/PostCard';
import { getPosts } from '@/services/posts';
import { PostData } from '@/types/PostTypes';
import { extractTextFromContent } from '@/utils/extractTextFromContent';
import { formatDate } from '@/utils/formateDate';
import { generateExcerp } from '@/utils/generateExcerp';

const PostsCards = async () => {
  const posts = (await getPosts()) as PostData[];

  return (
    <div
      className="flex gap-8 mt-10 justify-center flex-wrap max-w-5xl p-8 scroll-mt-[132px]"
      id="artigos"
    >
      {posts &&
        posts.map((item, index) => (
          <PostCard
            key={index}
            imageUrl={item.cover.url}
            title={item.title}
            slug={item.slug}
            size={index === 0 ? 'retangle' : 'square'}
            date={formatDate(item.publishedAt)}
            excerpt={generateExcerp(extractTextFromContent(item.content))}
          />
        ))}
    </div>
  );
};

export default PostsCards;
