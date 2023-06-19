export function checkPermutations(string1 :string, string2:string): boolean {
  let newStr1:string = '';
  let newStr2:string = '';

  for(let i = string1.length - 1; i >=0; i--){
    const char:string = string1[i];
    newStr1 += char;
  }

  for(let i = string2.length - 1; i >=0; i--){
    const char:string = string1[i];
    newStr2 += char;
  }

  return newStr1 === newStr2;
}