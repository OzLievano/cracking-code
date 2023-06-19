export function stringCompression(str: string): string {
  const results:string[] = [];
  // we have a string aabcccccaaa;
  let char:string = str[0];
  let count:number = 0 ;
  
  for(let i = 0 ; i < str.length ; i++){
    if(char === str[i]) {
      count += 1;
    }
    if(char !== str[i]) {
      results.push(`${char}${count}`);
      count = 0;
      char = str[i];
      count += 1;
    }
  }
  
   results.push(`${char}${count}`);
   const compressedStr:string = results.join("");
   
   if (compressedStr.length > str.length){
     return str;
   }
  
  // create new variable let char 
  // set it to the first letter in str 
  // do we see this char in the str? yes? count + 1 , go to next item
  // is this str[i] = char? yes count + 1 , go to next item 
  // is this str[i] = char? no? set value into ana rray i think reset count , set char to new str[i] add one again 
      
  // if(compressedString.length > str.length) {
  //   return str;
  // }

  return compressedStr;

}