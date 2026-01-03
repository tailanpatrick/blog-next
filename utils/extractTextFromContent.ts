export function extractTextFromContent(content: any): string {
  if (!content) return '';

  if (typeof content === 'string') return content;

  if (Array.isArray(content)) {
    return content
      .map((block) => block.children?.map((child: any) => child.text).join(' '))
      .join(' ');
  }

  return '';
}
