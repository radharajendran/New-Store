//external libs for node
const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const products =  require('./products');

//listening the configured ports
http.listen(8081, function () {
    console.log('listening on 8081');
});

//post request getting in request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/products/:productIds', async (req, res) => {
    
    let totalPrice = await products.getProductsTotal(req.params['productIds']);
    res.json({status: 'OK', data: totalPrice});
});
