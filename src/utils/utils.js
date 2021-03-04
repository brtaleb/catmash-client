export function getTwoRandomElements(arr){
  if(arr.length < 2) return [];

  const firstItem = Math.floor(Math.random() * arr.length);
  let secondItem = Math.floor(Math.random() * arr.length);

  while(secondItem === firstItem){
    secondItem = Math.floor(Math.random() * arr.length);
  }

  return [arr[firstItem], arr[secondItem]];
}
