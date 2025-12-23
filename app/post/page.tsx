import Image from 'next/image';
import notebookImage from '@/public/notebook.png';
import RichTextRenderer from '@/components/RichTextRenderer';
import { RichTextContent } from '@/types/RichTextContent';

const postContent: RichTextContent = [
  {
    type: 'paragraph',
    children: [
      {
        text: 'O reinado mudou no maior palco da programação global. Pela primeira vez na história da plataforma, o TypeScript assumiu o topo como a linguagem mais popular no GitHub, ultrapassando Python e até mesmo o seu “parente” JavaScript, segundo o relatório GitHub Octoverse. O marco ocorreu em agosto de 2025 e simboliza uma mudança importante na forma como desenvolvedores — e agora, agentes de IA — escrevem código.\n\n\nO crescimento do TypeScript está diretamente ligado ao avanço da inteligência artificial generativa no desenvolvimento de software. Com agentes autônomos e copilotos de código cada vez mais presentes, linguagens tipadas ganham terreno por oferecerem mais controle e segurança na produção. Em outras palavras, a IA escreve, mas o TypeScript ajuda a garantir que nada exploda silenciosamente no servidor.',
        type: 'text',
      },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: '',
        type: 'text',
      },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'A migração também reflete a transformação do ecossistema front-end. Frameworks modernos como React, Angular, Next.js e SvelteKit já adotam TypeScript como padrão — e isso cria um efeito dominó entre equipes, empresas e desenvolvedores iniciantes.',
        type: 'text',
      },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: '',
        type: 'text',
      },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Enquanto o Python segue firme no trono dos projetos de IA e ciência de dados, o relatório aponta que a combinação JavaScript + TypeScript ainda responde pela maior parte do desenvolvimento global, especialmente na web e em aplicações distribuídas.\n\nSegundo o GitHub, o avanço do TypeScript foi apenas uma das três grandes mudanças impulsionadas pela IA em 2025. Ferramentas generativas se tornaram padrão no fluxo de desenvolvimento: mais de 1,1 milhão de repositórios públicos já usam kits de desenvolvimento para LLMs, sendo 693 mil criados apenas no último ano.',
        type: 'text',
      },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: '',
        type: 'text',
      },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'O ritmo de produção também impressiona. Os desenvolvedores somaram 518,7 milhões de pull requests no período — crescimento de 29% — e publicaram quase 1 bilhão de commits, com um recorde de 100 milhões em agosto. E a adoção do Copilot virou rotina: 80% dos novos programadores utilizam o assistente na primeira semana usando o GitHub.',
        type: 'text',
      },
    ],
  },
];

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
      <div className="md:ml-10 text-[#2D3748] px-6 py-1">
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

        <RichTextRenderer content={postContent} />
      </div>
    </div>
  );
};

export default Post;
