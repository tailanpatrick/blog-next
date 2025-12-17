import Banner from '@/components/Banner';
import PostsCards from '@/components/PostsCards';

export default function Home() {
	return (
		<div className="flex flex-col items-center">
			<Banner />
			<PostsCards />
		</div>
	);
}
