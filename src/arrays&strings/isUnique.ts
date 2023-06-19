interface HashTable<T> {
  [key:string]: number;
}

export function isUnique(string:string): boolean {
  const charLookUp: HashTable<number> = {};
  for (let i = 0; i < string.length; i++){
    const char = string[i];
    if(!charLookUp[char]){
      charLookUp[char] = 1;
    } else {
      return false;
    }
  }
  return true;
}