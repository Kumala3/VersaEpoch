export function capitalizeWord(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function capitalizeString(s: string, splitCharacter: string): string {
  return s
    .split(splitCharacter)
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
    .join(' ');
}
