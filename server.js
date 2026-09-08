const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const WEB_ROOT = __dirname;
const REPO = 'saferill/Linko';

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml',
  '.apk': 'application/vnd.android.package-archive',
  '.exe': 'application/x-msdownload',
  '.json': 'application/json'
};

function fetchGitHubRelease() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: `/repos/${REPO}/releases/latest`,
      headers: {
        'User-Agent': 'Linko-Local-Server',
        'Accept': 'application/vnd.github.v3+json'
      }
    };
    https.get(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);

  // Handle /download/:platform
  if (reqPath.startsWith('/download/')) {
    const platform = reqPath.replace('/download/', '').toLowerCase();
    try {
      const release = await fetchGitHubRelease();
      const assets = release.assets || [];
      let targetAsset = null;

      if (platform === 'windows' || platform === 'exe' || platform === 'setup') {
        targetAsset = assets.find(a => a.name.endsWith('-Setup.exe'));
      } else if (platform === 'portable' || platform === 'zip') {
        targetAsset = assets.find(a => a.name.endsWith('-Portable.zip'));
      } else if (platform === 'android' || platform === 'apk' || platform === 'arm64') {
        targetAsset = assets.find(a => a.name.includes('arm64-v8a') && !a.name.includes('FOSS'));
      } else if (platform === 'armv7' || platform === 'armeabi-v7a') {
        targetAsset = assets.find(a => a.name.includes('armeabi-v7a') && !a.name.includes('FOSS'));
      } else if (platform === 'x86_64') {
        targetAsset = assets.find(a => a.name.includes('x86_64') && !a.name.includes('Windows'));
      } else if (platform === 'foss') {
        targetAsset = assets.find(a => a.name.includes('FOSS-arm64') || (a.name.includes('FOSS') && a.name.includes('arm64')));
      }

      if (targetAsset && targetAsset.browser_download_url) {
        res.writeHead(302, { 'Location': targetAsset.browser_download_url });
        res.end();
        return;
      }
      res.writeHead(302, { 'Location': release.html_url || `https://github.com/${REPO}/releases/latest` });
      res.end();
      return;
    } catch (e) {
      res.writeHead(302, { 'Location': `https://github.com/${REPO}/releases/latest` });
      res.end();
      return;
    }
  }

  // Handle /api/releases
  if (reqPath === '/api/releases') {
    try {
      const release = await fetchGitHubRelease();
      res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(JSON.stringify(release));
      return;
    } catch (e) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: e.message }));
      return;
    }
  }

  if (reqPath === '/') reqPath = '/index.html';
  const filePath = path.join(WEB_ROOT, reqPath);
  
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
      res.end('404 Not Found');
      return;
    }
    
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    
    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': stats.size,
      'Access-Control-Allow-Origin': '*'
    });
    
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log('Linko Web Server running at http://localhost:' + PORT);
});
