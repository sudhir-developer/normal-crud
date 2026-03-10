export interface Userdetails{
  id:number,
  title:string,
  completed:boolean
}
export async function fetchContactData(): Promise<Userdetails[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!res.ok) throw new Error("Failed to fetch todos");
  const data: Userdetails[] = await res.json();
  return data;
}