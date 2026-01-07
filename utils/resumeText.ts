export function resumeText(longText: string, limite: number = 160): string {
  if (longText.length <= limite) {
    return longText;
  }

  const subslice = longText.slice(0, limite);
  const ultimoEspaco = subslice.lastIndexOf(' ');

  if (ultimoEspaco === -1) {
    return subslice + '...';
  }

  return subslice.slice(0, ultimoEspaco) + '...';
}
