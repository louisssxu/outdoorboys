import getDomain from "@/app/lib/getDomain";

async function fetchData(): Promise<any> {
  const domain: string = getDomain();
  const endpoint: string = `${domain}/api`;

  const response: Response = await fetch(endpoint, { cache: "no-store" });
  const data: any = response.json();
  console.log(data);
  const jsonData: string = JSON.stringify(data);
  console.log(jsonData);
  console.log(response.status);
  return data;
}

export default async function Home() {
  const data = await fetchData();
  return <div>Home Page test 3 {data && JSON.stringify(data)}</div>;
}
