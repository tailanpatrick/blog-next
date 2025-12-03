import Image from 'next/image';
import crods from '@/public/croods 1.png';
import coffeIcon from '@/public/coffe-icon.png';

const Banner = () => {
	return (
		<div className="w-screen h-screen flex flex-col md:flex-row md:h-[467px] pt-8 md:justify-center items-center p-3 gap-14 md:gap-[150px] bg-[#fbfbfb]">
			<div className="md:w-[354px] md:h-[146px]">
				<h1 className="font-bold text-6xl relative text-shadow-lg">
					Make better coffe{''}
					<Image
						src={coffeIcon}
						alt=""
						className="w-[70px] h-[67px] inline-block"
					/>
				</h1>
				<p className="text-3xl text-gray-500">why learn how to blog?</p>
			</div>

			<Image src={crods} alt="imagem do banner" />
		</div>
	);
};

export default Banner;
