import PostCard from '@/components/PostCard';

import notebookImage from '@/public/notebook.png';

const PostsCards = () => {
	return (
		<div
			className="flex gap-8 mt-10 justify-center flex-wrap max-w-5xl p-8"
			id="artigos"
		>
			<PostCard
				imageUrl={notebookImage}
				title="long estabilished"
				slug="long-estabilished"
				size="retangle"
				date="May 20th 2020"
				excerpt="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that...."
			/>
			<PostCard
				imageUrl={notebookImage}
				title="long estabilished"
				slug="long-estabilished"
				size="square"
				date="May 20th 2020"
				excerpt="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that...."
			/>
			<PostCard
				imageUrl={notebookImage}
				title="long estabilished"
				slug="long-estabilished"
				size="square"
				date="May 20th 2020"
				excerpt="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that...."
			/>

			<PostCard
				imageUrl={notebookImage}
				title="long estabilished"
				slug="long-estabilished"
				size="square"
				date="May 20th 2020"
				excerpt="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that...."
			/>
		</div>
	);
};

export default PostsCards;
