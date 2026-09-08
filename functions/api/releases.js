export async function onRequest(context) {
  const REPO = 'saferill/Linko';
  const GITHUB_API = `https://api.github.com/repos/${REPO}/releases/latest`;

  try {
    const res = await fetch(GITHUB_API, {
      headers: {
        'User-Agent': 'Linko-Cloudflare-Pages',
        'Accept': 'application/vnd.github.v3+json'
      },
      cf: { cacheTtl: 600, cacheEverything: true }
    });

    if (!res.ok) {
      return new Response(JSON.stringify({ error: 'Failed to fetch GitHub release' }), {
        status: res.status,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
      });
    }

    const data = await res.json();
    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=600'
      }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
    });
  }
}