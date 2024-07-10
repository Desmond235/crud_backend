 const express = require("express");

 const app = express();

 const port = 2000;

 app.listen(port, () => console.log("server running on port " + port));

const productData = [];

app.post('api/add-product', (req, res) =>{
    console.log('result', req.body);
    const pData ={
        "id": productData.length + 1,
        "name": req.body.name,
        "price": req.body.price,
        "description": req.body.description
    };
    productData.push(pData)
    console.log('final product', pData);
   return res.status(200).json({
        "status-code": 200,
        "message": "product added successfully",
        "product": pData
    })
})