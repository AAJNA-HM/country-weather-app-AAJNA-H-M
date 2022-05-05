let regExp = /^[A-Z]+$/i

export function validateInput(string: string){
  return regExp.test(string);
}