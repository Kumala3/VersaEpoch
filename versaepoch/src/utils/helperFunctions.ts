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

export function toCamelCase<T>(obj: T): T {
  if (Array.isArray(obj)) {
    return obj.map(toCamelCase) as T;
  } else if (obj !== null && typeof obj === 'object') {
    return Object.keys(obj).reduce((result, key) => {
      const camelKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
      result[camelKey] = toCamelCase((obj as Record<string, unknown>)[key]);
      return result;
    }, {} as Record<string, unknown>) as T;
  }
  return obj;
};
