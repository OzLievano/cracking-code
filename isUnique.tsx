function isUnique(string:string): boolean {
  const charLookUp = {};
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