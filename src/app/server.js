const fs = require('fs');
const http = require('http');
const https = require ('https');
const express = require('express');
const file = './cities/assets/reviewData.json';



const hostname = 'adrianatanasov.com';
const httpPort = 80;
const httpsPort = 443;

const httpsOptions = {
    cert: fs.readFileSync('/etc/ssl/adrianatanasov_com.crt'),
    ca: fs.readFileSync('/etc/ssl/adrianatanasov_com.ca-bundle'),
    key: fs.readFileSync('/etc/ssl/server.key')
}

const app = express();
const httpServer = http.createServer(app);
const httpsServer = https.createServer(httpsOptions, app);


app.use((req, res, next) =>{
if(req.protocol === 'http'){
    res.redirect(301,`https://${req.headers.host}${req.url}`);
}
next();
});

app.use(express.static('./production/'));

app.get('/', function (req, res) {
    res.render('index', {});
  });


app.post('/update', function(req, res){
    if(!fs.existsSync(file)){
    fs.writeFile(file, JSON.stringify(req));
        res.send("Writing to file" + file);
    }
    else{
        res.send("Write Failed");
    }

});



httpServer.listen(httpPort, httpsOptions);
httpsServer.listen(httpsPort, httpsOptions);
