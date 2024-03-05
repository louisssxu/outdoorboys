export default function getDomain(): string {
  const protocol =
    process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? "https" : "http";
  const domain = process.env.NEXT_PUBLIC_VERCEL_URL;
  return `${protocol}://${domain}`;
}
