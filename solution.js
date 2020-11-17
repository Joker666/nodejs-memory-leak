const http = require("http");

function computeTerm(term) {
    setTimeout(() => {
        delete computeTerm[term];
    }, 1000);
    return computeTerm[term] || (computeTerm[term] = compute());

    function compute() {
        return new Array(10000).join("*");
    }
}

function noClosure() {
    var cFoo = 900;
    var cBaz = new Array(10000).join("*");
    function closureFunc() {
        return cFoo;
    }
    cBaz = null;
    return closureFunc;
}

var theThing = null;
var replaceThing = function () {
    var originalThing = theThing;
    var unused = function () {
        if (originalThing) console.log("hi");
    };
    theThing = {
        longStr: new Array(10000).join("*"),
        someMethod: function () {
            console.log(someMessage);
        },
    };
    originalThing = null;
};

const server = http.createServer((req, res) => {
    switch (req.url) {
        case "/global":
            const requestLogs = [];
            requestLogs.push({ url: req.url, array: new Array(10000).join("*") });
            res.end(JSON.stringify(requestLogs));
            break;
        case "/closures":
            var closure = noClosure();
            closure();
            res.writeHead(200);
            res.end("Hello World");
            break;
        case "/closures2":
            replaceThing();
            res.writeHead(200);
            res.end("Hello World");
            break;
        case "/cache":
            res.end(computeTerm(Math.random()));
            break;
        case "/promise":
            // Only solution is increase ram in the machine, or
            // Use a queue to hanle the long running tasks
            break;
        default:
            res.writeHead(404);
            res.end(JSON.stringify({error:"Resource not found"}));
    }
});

server.listen(3000);
console.log("Server listening to port 3000. Press Ctrl+C to stop it.");
