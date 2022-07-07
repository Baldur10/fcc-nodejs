const http = require('http');

const server = http.createServer((req,res) => {
    // For homepage, simple ('/')
    if (req.url == `/`){
        res.end(`Welcome to our home page`);
    }
    // For /about page
    else if(req.url == `/about`){
        res.end(`Here is our short history`);
    } 
    // For generalised error messages
    else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">go back home</a>
        `);
    }
}).listen(5000, () => {
    console.log(`Server listening on port : 5000`);
});