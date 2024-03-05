import Image from "next/image";

async function fetchData() {
  const url = `http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api`;
  const response = await fetch(url, { cache: "no-store" });
  const data = response.json();
  console.log(data);
  const jsonData = JSON.stringify(data);
  console.log(jsonData);
  console.log(response.status);
  return data;
}

export default async function Home() {
  const data = await fetchData();
  return <div>Home Page test 3 {data && JSON.stringify(data)}</div>;
}
