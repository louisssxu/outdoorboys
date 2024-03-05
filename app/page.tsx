import getDomain from "@/app/lib/getDomain";

async function getData(): Promise<any> {
  const domain: string = getDomain();
  const endpoint: string = `${domain}/api`;

  const response: Response = await fetch(endpoint, { cache: "no-store" });

  if (!response.ok) {
    throw new Error("failed to fetch data");
  }
  if (response.headers.get("content-type") !== "application/json") {
    return {};
  }
  const data: any = response.json();
  return data;
}

export default async function Home() {
  const data = await getData();

  return <div>Home Page test 3 {data && JSON.stringify(data)}</div>;
}
