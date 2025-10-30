export function getYouTubeId(url) {
  try {
    const u = new URL(url);
    // https://www.youtube.com/watch?v=XXXX
    if ((u.hostname.includes('youtube.com') || u.hostname.includes('youtu.be'))) {
      if (u.hostname.includes('youtu.be')) {
        // https://youtu.be/XXXX
        return u.pathname.slice(1);
      }
      if (u.pathname === '/watch') {
        return u.searchParams.get('v');
      }
      // Shorts: https://www.youtube.com/shorts/XXXX
      if (u.pathname.startsWith('/shorts/')) {
        return u.pathname.split('/')[2];
      }
      // Embed ya armado
      if (u.pathname.startsWith('/embed/')) {
        return u.pathname.split('/')[2];
      }
    }
  } catch {
    /* noop */
  }
  return null;
}
