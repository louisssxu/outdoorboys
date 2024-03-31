export default function getApiURL(): string {
  const protocol = "https";
  const domain = process.env.PUBLIC_API_URL;

  return `${protocol}://${domain}`;
}
