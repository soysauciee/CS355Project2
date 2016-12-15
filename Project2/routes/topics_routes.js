var express = require('express');
var router = express.Router();
var topics_dal = require('../model/topics_dal');



// View All topics
router.get('/all', function(req, res) {
    topics_dal.getAll(function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.render('topics/topicsViewAll', { 'result':result });
        }
    });

});


// Return the add a new cat form
router.get('/add', function(req, res){
    // passing all the query parameters (req.query) to the insert function instead of each individually
    topics_dal.getAll(function(err,result) {
        if (err) {
            res.send(err);
        }
        else {
            res.render('topics/topicsAdd', {'topics': result});
        }
    });
});



router.get('/insert', function(req, res){
    // simple validation
    if(req.query.topic_subject == null) {
        res.send('categories Name must be provided.');
    }
    else if(req.query.topic_cat == null) {
        res.send('An topic_subject provided');
    }
    else {
        // passing all the query parameters (req.query) to the insert function instead of each individually
        topics_dal.insert(req.query, function(err,result) {
            if (err) {
                console.log(err)
                res.send('Error');

            }
            else {
                //poor practice for redirecting the user to a different page, but we will handle it differently once we start using Ajax
                res.redirect(302, '/');
            }
        });
    }
});









module.exports = router;