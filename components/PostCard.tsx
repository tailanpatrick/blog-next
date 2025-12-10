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
	const sizeSmall = size === 'small';

	return (
		<div
			className={`${
				sizeSmall
					? 'md:w-[300px] h-[382px] flex-col'
					: 'md:w-[966px] h-[243px] flex-row-reverse'
			} flex  border border-gray-200  shadow-xl rounded-md`}
		>
			<Image
				src={imageUrl}
				alt={`Imagem do post ${title}`}
				className={`${
					sizeSmall ? 'w-full h-[179px]' : 'w-[433.24px] h-[243px]'
				}`}
			/>
			<div
				className={`flex flex-col ${
					sizeSmall ? 'gap-4 p-5' : 'gap-6 px-12 py-8'
				} `}
			>
				<h2
					className={`text-gray-800 ${
						sizeSmall ? 'text-xl' : 'text-3xl'
					}`}
				>
					{title}
				</h2>
				<p className="text-[#718096] text-sm">{excerpt}</p>
				<div className="flex w-full h-full justify-between pb-12">
					<span className="text-xs text-[#718096]">{date}</span>
					<a className="font-bold text-gray-800 text-xs" href="#">
						Read more
					</a>
				</div>
			</div>
		</div>
	);
};

export default PostCard;
