export default function getApiURL(): string {
  const protocol =
    process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? "https" : "http";
  const domain = process.env.PUBLIC_API_URL
    ? process.env.PUBLIC_API_URL
    : "localhost:4000";
  return `${protocol}://${domain}`;
}
