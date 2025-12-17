import Image from 'next/image';
import notebookImage from '@/public/notebook.png';

const Post = () => {
	return (
		<div className="flex flex-col md:items-center">
			<div className="w-full flex md:justify-center">
				<Image
					src={notebookImage}
					alt="Imagem do Post"
					className="w-full md:w-[963] md:h-[380.37] mb-10"
				/>
			</div>
			<div className="md:ml-30 text-[#2D3748] px-6 py-1">
				<h1 className="text-4xl md:text-[45px] tracking-tight leading-tight md:leading-normal font-bold">
					Finibus Bonorum et Malorum
				</h1>
				<div className="flex md:flex-row flex-col gap-2 md:gap-8 mb-5 mt-3">
					<span className="font-bold text-md md:text-lg">
						Written by John doe
					</span>
					<span className="text-[#718096] text-sm md:text-lg">
						Monday May 20
					</span>
				</div>
				<hr className="text-gray-300 max-w-6xl" />
				<article className="prose prose-neutral max-w-5xl mt-5">
					Section 1.10.32 of "de Finibus Bonorum et Malorum", written
					by Cicero in 45 BC "Sed ut perspiciatis unde omnis iste
					natus error sit voluptatem accusantium doloremque
					laudantium, totam rem aperiam, eaque ipsa quae ab illo
					inventore veritatis et quasi architecto beatae vitae dicta
					sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
					aspernatur aut odit aut fugit, sed quia consequuntur magni
					dolores eos qui ratione voluptatem sequi nesciunt. Neque
					porro quisquam est, qui dolorem ipsum quia dolor sit amet,
					consectetur, adipisci velit, sed quia non numquam eius modi
					tempora incidunt ut labore et dolore magnam aliquam quaerat
					voluptatem. Ut enim ad minima veniam, quis nostrum
					exercitationem ullam corporis suscipit laboriosam, nisi ut
					aliquid ex ea commodi consequatur? Quis autem vel eum iure
					reprehenderit qui in ea voluptate velit esse quam nihil
					molestiae consequatur, vel illum qui dolorem eum fugiat quo
					voluptas nulla pariatur?" 1914 translation by H. Rackham
					"But I must explain to you how all this mistaken idea of
					denouncing pleasure and praising pain was born and I will
					give you a complete account of the system, and expound the
					actual teachings of the great explorer of the truth, the
					master-builder of human happiness. No one rejects, dislikes,
					or avoids pleasure itself, because it is pleasure, but
					because those who do not know how to pursue pleasure
					rationally encounter consequences that are extremely
					painful. Nor again is there anyone who loves or pursues or
					desires to obtain pain of itself, because it is pain, but
					because occasionally circumstances occur in which toil and
					pain can procure him some great pleasure. To take a trivial
					example, which of us ever undertakes laborious physical
					exercise, except to obtain some advantage from it? But who
					has any right to find fault with a man who chooses to enjoy
					a pleasure that has no annoying consequences, or one who
					avoids a pain that produces no resultant pleasure?" Section
					1.10.33 of "de Finibus Bonorum et Malorum" "At vero eos et
					accusamus et iusto odio dignissimos ducimus qui blanditiis
					praesentium voluptatum deleniti atque corrupti quos dolores
					et quas molestias excepturi sint occaecati cupiditate non
					provident, similique sunt in culpa qui officia deserunt
					mollitia animi, id est laborum et dolorum fuga. Et harum
					quidem rerum facilis est et expedita distinctio. Nam libero
					tempore, cum soluta nobis est eligendi optio cumque nihil
					impedit quo minus id quod maxime placeat facere possimus,
					omnis voluptas assumenda est, omnis dolor repellendus.
					Temporibus autem quibusdam et aut officiis debitis aut rerum
					necessitatibus saepe eveniet ut et voluptates repudiandae
					sint et molestiae non recusandae. Itaque earum rerum hic
					tenetur a sapiente delectus, ut aut reiciendis voluptatibus
					maiores alias consequatur aut perferendis doloribus
					asperiores repellat." Section "At vero eos et accusamus et
					iusto odio dignissimos ducimus qui blanditiis praesentium
					voluptatum deleniti atque corrupti quos dolores et quas
					molestias excepturi sint occaecati cupiditate non provident,
					similique sunt in culpa qui officia deserunt mollitia animi,
					id est laborum et dolorum fuga. Et harum quidem rerum
					facilis est et expedita distinctio. Nam libero tempore, cum
					soluta nobis est eligendi optio cumque nihil impedit quo
					minus id quod maxime placeat facere possimus, omnis voluptas
					assumenda est, omnis dolor repellendus. Temporibus autem
					quibusdam et aut officiis debitis aut rerum necessitatibus
					saepe eveniet ut et voluptates repudiandae sint et molestiae
					non recusandae. Itaque earum rerum hic tenetur a sapiente
					delectus, ut aut reiciendis voluptatibus maiores alias
					consequatur aut perferendis doloribus asperiores repellat."
					Section 1.10.33 "At vero eos et accusamus et iusto odio
					dignissimos ducimus qui blanditiis praesentium voluptatum
					deleniti atque corrupti quos dolores et quas molestias
					excepturi sint occaecati cupiditate non provident, similique
					sunt in culpa qui officia deserunt mollitia animi, id est
					laborum et dolorum fuga. Et harum quidem rerum facilis est
					et expedita distinctio. Nam libero tempore, cum soluta nobis
					est eligendi optio cumque nihil impedit quo minus id quod
					maxime placeat facere possimus, omnis voluptas assumenda
					est, omnis dolor repellendus. Temporibus autem quibusdam et
					aut officiis debitis aut rerum necessitatibus saepe eveniet
					ut et voluptates repudiandae sint et molestiae non
					recusandae. Itaque earum rerum hic tenetur a sapiente
					delectus, ut aut reiciendis voluptatibus maiores alias
					consequatur aut perferendis doloribus asperiores repellat."
					Section 1.10.33 of "de Finibus Bonorum et Malorum", written
					by Cicero in 45 BC "At vero eos et accusamus et iusto odio
					dignissimos ducimus qui blanditiis praesentium voluptatum
					deleniti atque corrupti quos dolores et quas molestias
					excepturi sint occaecati cupiditate non provident, similique
					sunt in culpa qui officia deserunt mollitia animi, id est
					laborum et dolorum fuga. Et harum quidem rerum facilis est
					et expedita distinctio. Nam libero tempore, cum soluta nobis
					est eligendi optio cumque nihil impedit quo minus id quod
					maxime placeat facere possimus, omnis voluptas assumenda
					est, omnis dolor repellendus. Temporibus autem quibusdam et
					aut officiis debitis aut rerum necessitatibus saepe eveniet
					ut et voluptates repudiandae sint et molestiae non
					recusandae. Itaque earum rerum hic tenetur a sapiente
					delectus, ut aut reiciendis voluptatibus maiores alias
					consequatur aut perferendis doloribus asperiores repellat."
				</article>
			</div>
		</div>
	);
};

export default Post;
