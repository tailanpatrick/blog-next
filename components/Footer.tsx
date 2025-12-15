import Image from 'next/image';
import { navigation } from '@/utils/navigation';
import Link from 'next/link';

const Footer = () => {
	const socialsIcons = navigation.filter((item) => item.icon !== '');
	console.log(socialsIcons);
	return (
		<div className="flex justify-between items-center w-full bg-white border-t border-gray-200 mt-6 md:px-20 md:py-6 p-6">
			<span className="text-sm">
				<strong>hotcoffe</strong>2025 all rights reserved
			</span>

			<div className="flex md:px-9 md:gap-6.5 gap-2.5">
				{socialsIcons.map((item, index) => (
					<Link href="#" key={`${item}-${index}`}>
						<Image src={item.icon} alt="" className="w-6 h-6" />
					</Link>
				))}
			</div>
		</div>
	);
};

export default Footer;
