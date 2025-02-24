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
  }

  return new Response("Página no encontrada", { status: 404 });
}