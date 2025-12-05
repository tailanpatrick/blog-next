import Image, { StaticImageData } from 'next/image';

interface PostCardProps {
	title: string;
	date: string;
	excerpt: string;
	slug: string;
	size: 'small' | 'big';
	imageUrl: StaticImageData;
}

const PostCard = ({ title, date, size, excerpt, imageUrl }: PostCardProps) => {
	return (
		<div
			className={`${
				size === 'small'
					? 'md:w-[300px] h-[382px]'
					: 'md:w-[966px] h-[243px]'
			} `}
		>
			<div className="">
				<h2>{title}</h2>
				<p>{excerpt}</p>
				<span>{date}</span>
				<a>Read more</a>
			</div>

			<Image src={imageUrl} alt={`Imagem do post ${title}`} />
		</div>
	);
};

export default PostCard;
