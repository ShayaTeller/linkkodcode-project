export default function idcreator(arr){
  for (let index = 0; index < arr.length; index++) {
    arr[index].id = index;    
  }
  return arr;
}