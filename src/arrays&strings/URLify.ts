export function URLify(string: string): string{
  return string.trim().split(" ").join("%20");
}