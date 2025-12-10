import Image from 'next/image';

import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from '@headlessui/react';

import instaIcon from '@/public/insta-icon.png';
import twitterIcon from '@/public/twitter-icon.png';
import linkedinIcon from '@/public/linkedin-icon.png';
import searchIcon from '@/public/search-icon.png';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const SearchMenuWithSocials = () => {
	const navigation = [
		{ name: 'Home', icon: '', href: '#' },
		{ name: 'Articles', icon: '', href: '#' },
		{ name: '', icon: instaIcon, href: '#' },
		{ name: '', icon: twitterIcon, href: '#' },
		{ name: '', icon: linkedinIcon, href: '#' },
	];

	function classNames(...classes: any) {
		return classes.filter(Boolean).join(' ');
	}

	return (
		<div className=" flex justify-between md:justify-around items-center">
			<div className="flex gap-2 py-6 items-center">
				<Image src={searchIcon} alt="" className="w-4 h-4" />
				<input
					type="text"
					placeholder="Search..."
					className="max-w-28 outline-none border-none text-gray-600 mr-7"
				/>
			</div>

			<Disclosure
				as="nav"
				className="relative after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
			>
				<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
					<DisclosureButton className="group relative md:hidden cursor-pointer inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none focus:-outline-offset-1">
						{/* Mobile menu button*/}
						<Bars3Icon
							aria-hidden="true"
							className="block size-8 group-data-open:hidden"
						/>
						<XMarkIcon
							aria-hidden="true"
							className="hidden size-8 group-data-open:block"
						/>
					</DisclosureButton>
					<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
						<div className="hidden  sm:ml-6 sm:block">
							<div className="flex space-x-4">
								{navigation.map((item, index) => (
									<a
										key={`${item.name}-${index}`}
										href={item.href}
										className={classNames(
											'rounded-md px-3 py-4 text-md font-medium'
										)}
									>
										{item.name}
										{item.icon && (
											<Image
												src={item.icon}
												alt=""
												className="w-6 h-6"
											/>
										)}
									</a>
								))}
							</div>
						</div>
					</div>
					<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
						<button
							type="button"
							className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2"
						>
							<span className="absolute -inset-1.5" />
						</button>
					</div>
				</div>

				<DisclosurePanel className="sm:hidden md:hidden bg-white max-w-32 absolute w-screen -left-20 z-99 shadow-md rounded-2xl border-2">
					<div className="space-y-1 px-2 pt-2 pb-3">
						{navigation.map((item, index) => (
							<DisclosureButton
								key={`${item.name}-${index}`}
								as="a"
								href={item.href}
								className={classNames(
									`flex flex-col items-center justify-center rounded-2xl px-3 py-4 text-base font-medium hover:bg-gray-400 active:bg-gray-400`
								)}
							>
								{item.name}

								{item.icon && (
									<Image
										src={item.icon}
										alt=""
										className="w-6 h-6"
									/>
								)}
							</DisclosureButton>
						))}
					</div>
				</DisclosurePanel>
			</Disclosure>
		</div>
	);
};

export default SearchMenuWithSocials;
