import http from "http";

const hostname = "localhost";
const port = 3000;

function requestHandler(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(`
        <html>
            <body>
                <p> Hello World! </p>
            </body>
        </html>
    `);
}

const server = http.createServer(requestHandler);

function onDone() {
    console.log(`Server is running at http://${hostname}:${port}`);
}

server.listen(port, hostname, onDone);