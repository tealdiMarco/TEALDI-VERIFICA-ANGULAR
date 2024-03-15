// Accedo all'oggetto dispatcher
let dispatcher = require('./dispatcher');
let mysql = require('mysql');
let header = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    'Content-Type': 'text/plain'
};

dispatcher.addListener("POST","/api/getStudClass",function(req,res){
    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "students"
    });
    con.connect(function(err) {
        header['Content-Type'] = 'application/json';
        res.writeHead(200, header);
        if (!err) {
            const query = `SELECT * FROM studenti WHERE classe = '${req["post"].classe}'`;
            con.query(query, function (errQ, resultQ) {
                if(!errQ){
                    res.end(JSON.stringify(resultQ));
                }
                else{
                    res.writeHead(500);
                    res.end(JSON.stringify("ERRORE QUERY"));
                }
            });
        }else{
            res.writeHead(500);
            res.end(JSON.stringify("ERRORE CONNESSIONE"));
        }
        con.end();
    });
});

dispatcher.addListener("POST","/api/insertStud",function(req,res){
    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "students"
    });
    con.connect(function(err) {
        header['Content-Type'] = 'application/json';
        res.writeHead(200, header);
        if (!err) {
            const query = `insert into studenti (cognome, nome, classe, indirizzo, citta) values ('${req["post"].cognome}', '${req["post"].nome}', '${req["post"].classe}', '${req["post"].indirizzo}', '${req["post"].citta}')`;
            con.query(query, function (errQ, resultQ) {
                console.log("after insert");
                console.log(resultQ);
                if(!errQ)
                    res.end(JSON.stringify(resultQ));
                else{
                    res.writeHead(500);
                    res.end(JSON.stringify("ERRORE QUERY"));
                }
            });
        }else{
            res.writeHead(500);
            res.end(JSON.stringify("ERRORE CONNESSIONE"));
        }
        con.end();
    });
});

dispatcher.addListener("GET", "/api/getStudents", function(req, res){
    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "students"
    });
    con.connect(function(err) {
        header['Content-Type'] = 'application/json';
        res.writeHead(200, header);

        if (!err) {
            con.query("SELECT * FROM studenti", function (errQprod, resultQprod) {
                if(!errQprod){
                    res.end(JSON.stringify(resultQprod));
                }
                else{
                    res.writeHead(500);
                    res.end(JSON.stringify("ERRORE QUERY"));
                }
            });
        }
        else {
            res.writeHead(500);
            res.end(JSON.stringify("ERRORE CONNESSIONE"));
        }
        con.end();
    });

});

dispatcher.addListener("GET", "/api/getClasses", function(req, res){
    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "students"
    });
    con.connect(function(err) {
        header['Content-Type'] = 'application/json';
        res.writeHead(200, header);

        if (!err) {
            con.query("SELECT * FROM classi", function (errQprod, resultQprod) {
                if(!errQprod){
                    res.end(JSON.stringify(resultQprod));
                }
                else{
                    res.writeHead(500);
                    res.end(JSON.stringify("ERRORE QUERY"));
                }
            });
        }
        else {
            res.writeHead(500);
            res.end(JSON.stringify("ERRORE CONNESSIONE"));
        }
        con.end();
    });

});

/* ********************************************************************** */
var http = require ("http");
http.createServer(function (request, response){
	dispatcher.dispatch(request, response);
}).listen(8888);
console.log('Server running on port 8888...');
dispatcher.showList();