import Image from 'next/image';

import instaIcon from '@/public/insta-icon.png';
import twitterIcon from '@/public/twitter-icon.png';
import linkedinIcon from '@/public/linkedin-icon.png';
import searchIcon from '@/public/search-icon.png';
import burgerMenu from '@/public/burger-menu.svg';

const SearchMenuWithSocials = () => {
	return (
		<div className=" flex justify-between md:justify-around items-center">
			<ul className="flex md:gap-8 md:items-center">
				<li className="flex gap-2 py-6 items-center">
					<Image src={searchIcon} alt="" className="w-4 h-4" />
					<input
						type="text"
						placeholder="Search..."
						className="max-w-28 outline-none border-none text-gray-600"
					/>
				</li>
				<li className="hidden md:block">
					<a href="">Home</a>
				</li>
				<li className="hidden md:block">
					<a href="">Articles</a>
				</li>
				<li className="hidden md:block">
					<a href="">
						<Image src={instaIcon} alt="" className="w-5 h-5" />
					</a>
				</li>
				<li className="hidden md:block">
					<a href="">
						<Image src={twitterIcon} alt="" className="w-6 h-6" />
					</a>
				</li>
				<li className="hidden md:block">
					<a href="">
						<Image src={linkedinIcon} alt="" className="w-6 h-6" />
					</a>
				</li>
			</ul>

			<div className="md:hidden">
				<button className="cursor-pointer p-2">
					<Image
						src={burgerMenu}
						alt="Menu dropdown"
						className="w-8 h-8"
					/>
				</button>
			</div>
		</div>
	);
};

export default SearchMenuWithSocials;
