export async function onRequest(context) {
  const platform = (context.params.platform || '').toLowerCase();
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
      return Response.redirect(`https://github.com/${REPO}/releases/latest`, 302);
    }

    const data = await res.json();
    const assets = data.assets || [];
    let targetAsset = null;

    if (platform === 'windows' || platform === 'exe' || platform === 'setup') {
      targetAsset = assets.find(a => a.name.endsWith('-Setup.exe'));
    } else if (platform === 'portable' || platform === 'zip') {
      targetAsset = assets.find(a => a.name.endsWith('-Portable.zip'));
    } else if (platform === 'android' || platform === 'apk' || platform === 'arm64' || platform === 'arm64-v8a') {
      targetAsset = assets.find(a => a.name.includes('arm64-v8a') && !a.name.includes('FOSS'));
    } else if (platform === 'armv7' || platform === 'armeabi-v7a') {
      targetAsset = assets.find(a => a.name.includes('armeabi-v7a') && !a.name.includes('FOSS'));
    } else if (platform === 'x86_64' || platform === 'x64') {
      targetAsset = assets.find(a => a.name.includes('x86_64') && !a.name.includes('Windows'));
    } else if (platform === 'foss' || platform === 'foss-arm64') {
      targetAsset = assets.find(a => a.name.includes('FOSS-arm64') || (a.name.includes('FOSS') && a.name.includes('arm64')));
    } else if (platform === 'foss-universal') {
      targetAsset = assets.find(a => a.name.includes('FOSS-universal') || a.name.includes('FOSS-Universal'));
    } else if (platform === 'universal') {
      targetAsset = assets.find(a => a.name.includes('Universal') && !a.name.includes('FOSS'));
    }

    if (targetAsset && targetAsset.browser_download_url) {
      return Response.redirect(targetAsset.browser_download_url, 302);
    }

    return Response.redirect(data.html_url || `https://github.com/${REPO}/releases/latest`, 302);
  } catch (err) {
    return Response.redirect(`https://github.com/${REPO}/releases/latest`, 302);
  }
}