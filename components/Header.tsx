import Image from 'next/image';
import logo from '@/public/logo.png';
import SearchMenuWithSocials from './SearchMenuWithSocials';

const Header = () => {
	return (
		<header className="w-full h-[85px] flex justify-around items-center px-1">
			<a href="">
				<Image src={logo} alt="" width={50} />
			</a>
			<SearchMenuWithSocials />
		</header>
	);
};

export default Header;
