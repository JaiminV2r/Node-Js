const express = require('express');
const module3 = express.Router();
const mongodb = require('mongodb')

module3.put('/', (req, res) => {
    mongodb.MongoClient.connect(process.env.CONNECTION_URL, (err, connection) => {
        if(err) throw err
        else {
            const db= connection.db(process.env.DATABASE_NAME, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            db.collection(process.env.COLLECTION_NAME).updateOne({"p_id":req.body.p_id},{
               $set:{
                   "p_name":req.body.p_name,
                   "p_price":req.body.p_price
               }
            }, (err, result) => {
                if(err) throw err;
                else {
                    res.send({ "msg":"record updated successfully"});
                }
            });
        }
    })
});
module.exports = module3