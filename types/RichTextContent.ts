export type RichTextContent = {
  type: 'paragraph';
  children: {
    type?: string;
    text: string;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    code?: boolean;
  }[];
}[];
