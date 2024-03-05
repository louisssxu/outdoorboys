import getDomain from "@/app/lib/getDomain";

async function getData(): Promise<any> {
  const domain: string = getDomain();
  const endpoint: string = `${domain}/api`;
  console.log(endpoint);

  try {
    const response = await fetch(endpoint, { cache: "no-store" });

    if (!response.ok) {
      console.error(
        `HTTP Error Response: ${response.status} ${response.statusText}`
      );
      throw new Error("failed to fetch data");
    }

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      console.error("Invalid content-type:", contentType);
      return {};
    }

    return response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error; // re-throwing the error after logging it
  }
}

export default async function Home() {
  try {
    const data = await getData();
    return <div>Home Page test 3 {JSON.stringify(data)}</div>;
  } catch (error) {
    console.error("Error in Home function:", error);
    // Handle the error appropriately in your UI
    return <div>Error loading data...</div>;
  }
}
