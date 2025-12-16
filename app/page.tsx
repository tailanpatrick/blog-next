import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PostsCards from '@/components/PostsCards';

export default function Home() {
	return (
		<div className="flex flex-col items-center">
			<Header />
			<Banner />
			<PostsCards />

			<Footer />
		</div>
	);
}
