const express = require('express');
const module4 = express.Router();
const mongodb = require('mongodb')

module4.delete('/', (req, res) => {
    mongodb.MongoClient.connect(process.env.CONNECTION_URL, (err, connection) => {
        if(err) throw err
        else {
            const db= connection.db(process.env.DATABASE_NAME);
            db.collection(process.env.COLLECTION_NAME).deleteOne({"p_id":req.body.p_id}, (err, result) => {
                if(err) throw err
                else {  
                    res.send({"msg":"Record successfully deleted..."})
                }
            })
        }
    });
});
module.exports = module4