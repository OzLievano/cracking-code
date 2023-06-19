export function oneAway(str1:string, str2:string):boolean {
  let editCount = 0;
  for(let i = 0; i < str1.length; i++){
    const char = str1[i];
    if(!str2.includes(char)){
      editCount += 1;
    }
  }

  return editCount <= 1;
}