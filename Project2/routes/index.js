var express = require('express');
var router = express.Router();
var index_dal = require('../model/index_dal');




// View All Cat to Show on Index Page
router.get('/', function(req, res) {
    index_dal.getAll(function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.render('index', { 'result':result });
        }
    });

});


// Delete a school for the given school_id
router.get('/delete', function(req, res){
    if(req.query.cat_id == null) {
        res.send('cat_id is null');
    }
    else {
        index_dal.delete(req.query.cat_id, function(err, result){
            if(err) {
                res.send(err);
            }
            else {
                //poor practice, but we will handle it differently once we start using Ajax
                res.redirect(302, '/');
            }
        });
    }
});












module.exports = router;
