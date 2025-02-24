addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);

  // Servir archivos estáticos
  if (url.pathname === "/") {
    const html = await fetch("https://raw.githubusercontent.com/BrayanGt17/b-unlocks-worker/main/public/index.html");
    return new Response(await html.text(), {
      headers: { "Content-Type": "text/html" },
    });
  } else if (url.pathname === "/styles.css") {
    const css = await fetch("https://raw.githubusercontent.com/BrayanGt17/b-unlocks-worker/main/public/styles.css");
    return new Response(await css.text(), {
      headers: { "Content-Type": "text/css" },
    });
  } else if (url.pathname === "/script.js") {
    const js = await fetch("https://raw.githubusercontent.com/BrayanGt17/b-unlocks-worker/main/public/script.js");
    return new Response(await js.text(), {
      headers: { "Content-Type": "application/javascript" },
    });
  } else if (url.pathname === "/favicon-96x96.png") {
    const png = await fetch("https://raw.githubusercontent.com/BrayanGt17/b-unlocks-worker/main/public/favicon-96x96.png");
    return new Response(await png.arrayBuffer(), {
      headers: { "Content-Type": "image/png" },
    });
  } else if (url.pathname === "/favicon.svg") {
    const svg = await fetch("https://raw.githubusercontent.com/BrayanGt17/b-unlocks-worker/main/public/favicon.svg");
    return new Response(await svg.text(), {
      headers: { "Content-Type": "image/svg+xml" },
    });
  } else if (url.pathname === "/favicon.ico") {
    const ico = await fetch("https://raw.githubusercontent.com/BrayanGt17/b-unlocks-worker/main/public/favicon.ico");
    return new Response(await ico.arrayBuffer(), {
      headers: { "Content-Type": "image/x-icon" },
    });
  } else if (url.pathname === "/apple-touch-icon.png") {
    const appleIcon = await fetch("https://raw.githubusercontent.com/BrayanGt17/b-unlocks-worker/main/public/apple-touch-icon.png");
    return new Response(await appleIcon.arrayBuffer(), {
      headers: { "Content-Type": "image/png" },
    });
  } else if (url.pathname === "/site.webmanifest") {
    const manifest = await fetch("https://raw.githubusercontent.com/BrayanGt17/b-unlocks-worker/main/public/site.webmanifest");
    return new Response(await manifest.text(), {
      headers: { "Content-Type": "application/manifest+json" },
    });
  }

  return new Response("Página no encontrada", { status: 404 });
}