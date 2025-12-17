import { RichTextContent } from '@/types/RichTextContent';

type RichTextRendererProps = {
	content: RichTextContent | null;
};

const RichTextRenderer = ({ content }: RichTextRendererProps) => {
	return (
		<article className="prose prose-neutral max-w-5xl mt-5">
			{content &&
				content.map((block, index) => {
					if (block.type === 'paragraph') {
						const text = block.children
							.map((c) => c.text)
							.join('')
							.trim();
						if (!text) return null;

						return (
							<p
								key={index}
								className={` ${
									index === 0 &&
									'first-letter:text-5xl first-letter:font-serif'
								} mt-5 text-base leading-relaxed text-gray-700 indent-7 text-justify`}
							>
								{text}
							</p>
						);
					}
				})}
		</article>
	);
};

export default RichTextRenderer;
