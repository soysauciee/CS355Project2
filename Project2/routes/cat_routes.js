var express = require('express');
var router = express.Router();
var cat_dal = require('../model/cat_dal');



router.get('/cat', function(req, res) {
    cat_dal.getAll(function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.render('cat/cat', { 'result':result });
        }
    });

});

router.get('/aboutus', function(req, res) {
    cat_dal.getAll(function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.render('cat/aboutus', { 'result':result });
        }
    });

});








router.get('/insert', function(req, res){
    // simple validation
    if(req.query.cat_name == null) {
        res.send('categories Name must be provided.');
    }
    else if(req.query.cat_description == null) {
        res.send('An description  must be selected');
    }
    else {
        // passing all the query parameters (req.query) to the insert function instead of each individually
        cat_dal.insert(req.query, function(err,result) {
            if (err) {
                console.log(err)
                res.send('That Categorie Currrently Exist Please Press Back Button And Choose A Different Name.');

            }
            else {
                //poor practice for redirecting the user to a different page, but we will handle it differently once we start using Ajax
                res.redirect(302, '/');
            }
        });
    }
});





// Return the add a new cat form
router.get('/add', function(req, res){
    // passing all the query parameters (req.query) to the insert function instead of each individually
    cat_dal.getAll(function(err,result) {
        if (err) {
            res.send(err);
        }
        else {
            res.render('cat/add', {'categories': result});
        }
    });
});





router.get('/', function(req, res){
    if(req.query.cat_id == null) {
        res.send('cat_id is null');
    }
    else {
        cat_dal.getById(req.query.cat_id, function(err,result) {
            if (err) {
                res.send(err);
            }
            else {
                res.render('cat/ById', {'result': result});
            }
        });
    }
});




module.exports = router;
