// Create web server
// Start server: node comments.js

const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer(function(req, res) {
    let parsedUrl = url.parse(req.url, true);
    let path = parsedUrl.path;
    let query = parsedUrl.query;

    if (path == '/comments') {
        if (req.method == 'GET') {
            fs.readFile('comments.json', 'utf-8', function(err, data) {
                if (err) {
                    res.writeHead(404);
                    res.end('File not found');
                } else {
                    res.writeHead(200, {'Content-Type': 'application/json'});
                    res.end(data);
                }
            });
        } else if (req.method == 'POST') {
            let body = '';
            req.on('data', function(chunk) {
                body += chunk;
            });
            req.on('end', function() {
                let newComment = JSON.parse(body);
                fs.readFile('comments.json', 'utf-8', function(err, data) {
                    if (err) {
                        res.writeHead(404);
                        res.end('File not found');
                    } else {
                        let comments = JSON.parse(data);
                        comments.push(newComment);
                        fs.writeFile('comments.json', JSON.stringify(comments), function(err) {
                            if (err) {
                                res.writeHead(404);
                                res.end('File not found');
                            } else {
                                res.writeHead(201, {'Content-Type': 'application/json'});
                                res.end(JSON.stringify(newComment));
                            }
                        });
                    }
                });
            });
        } else {
            res.writeHead(404);
            res.end('Not found');
        }
    } else {
        res.writeHead(404);
        res.end('Not found');
    }
});

server.listen(3000);
console.log('Server running at http://localhost:3000/comments');
