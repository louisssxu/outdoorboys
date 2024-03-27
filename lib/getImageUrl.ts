export default function getImageUrl(youtubeUrl: string) {
  const videoId: string = youtubeUrl.split("v=")[1];
  if (!videoId) {
    console.error("no video id");
    return "";
  }
  const ampersandPosition: number = videoId.indexOf("&");
  if (ampersandPosition !== -1) {
    return `https://img.youtube.com/vi/${videoId.substring(
      0,
      ampersandPosition
    )}/maxresdefault.jpg`;
  }
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}
