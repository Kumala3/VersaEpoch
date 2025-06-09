export function capitalizeWord(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
export function capitalizeString(s: string, splitCharacter: string): string {
  let result = '';
    const strings = s.split(splitCharacter);

  strings.forEach((str) => {
      result += str.charAt(0).toUpperCase() + str.slice(1) + " "
  });

  return result;
}
