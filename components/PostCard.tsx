'use client';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface PostCardProps {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  size: 'square' | 'retangle';
  imageUrl: string;
}

const PostCard = ({
  title,
  date,
  size,
  excerpt,
  imageUrl,
  slug,
}: PostCardProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const isSquare = size === 'square' || isMobile;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1000);
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Link href={`post/${slug}`}>
      <div
        className={`${
          isSquare
            ? 'md:w-[298px]  flex-col'
            : 'md:w-[966px] h-[280px] max-h-[422px] flex-row-reverse'
        } flex   border border-gray-200  shadow-xl rounded-md`}
      >
        <Image
          src={imageUrl}
          alt={`Imagem do post ${title}`}
          className={`${
            isSquare ? 'w-full h-[179px]' : 'w-[433.24px] h-[278px]'
          }`}
          width={500}
          height={500}
        />
        <div
          className={`flex flex-col ${
            isSquare ? 'gap-4 p-5' : 'gap-6 px-12 py-8'
          } `}
        >
          <h2 className={`text-gray-800 ${isSquare ? 'text-xl' : 'text-3xl'}`}>
            {title}
          </h2>
          <p className="text-[#718096] text-sm">{excerpt}</p>
          <div
            className={`flex w-full h-full justify-between  ${!isSquare ? 'pb-12 ' : 'pt-6'}`}
          >
            <span className="text-xs text-[#718096] first-letter:uppercase">
              {date}
            </span>
            <span className="font-bold text-gray-800 text-xs">Ler mais</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
