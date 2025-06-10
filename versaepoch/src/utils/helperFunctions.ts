export function capitalizeWord(word: string): string {
  if (!word) return word;
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function capitalizeString(s: string, splitCharacter: string): string {
  if (!s) return s;
  if(!splitCharacter) return capitalizeWord(s);
  return s
    .split(splitCharacter)
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
    .join(' ');
}
