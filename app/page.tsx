import Banner from '@/components/Banner';
import Header from '@/components/Header';
import PostsCards from '@/components/PostsCards';

export default function Home() {
	return (
		<div className="flex flex-col items-center">
			<Header />
			<Banner />
			<PostsCards />
		</div>
	);
}
