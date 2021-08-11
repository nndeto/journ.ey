//calling express
const express = require('express');
const router = express.Router();

//stimulates mongodb database
const db = require('../models/index.js');

//Index Route --> DONE //needs ejs
router.get('/', (req, res) => {
    db.Entry.find({}, (err, allEntry) => {
        if (err) return console.log(err);
        console.log(allEntry)
        res.render('entries/entryIndex.ejs', {
            allEntry: allEntry
        })
    })
})

//New Route --> DONE // needs ejs, form, and send form to create route
router.get('/new', (req, res) => {
    res.render('entries/entryNew.ejs')
})

//Create Route --> DONE
router.post('/', (req, res) => {
  db.Entry.create(req.body, (err, createdEntry) => {
      if (err) return console.log(err)
    //   console.log(createdEntry) --> checking ourselves
      res.redirect('/entry')
  })
})

//Show Route --> needs ejs
router.get('/:entryId', (req, res) => {
    db.Entry.findById(req.params.entryId, (err, singleEntry) => {
        if (err) return console.log(entry);
        res.render('entries/entryShow.ejs', {
            singleEntry: singleEntry
        })
    })
})

//Edit Route --> needs ejs, form, and sends form to update route
router.get('/:entryId/edit', (req, res) => {
    entryId = req.params.EntryId
    db.Entry.findById(entryId, (err, foundEntry) => {
        if (err) return console.log(err);
        res.render('entries/entryEdit.ejs', {
            foundEntry: foundEntry
        })
    })
})

//Update Route --> updated the db data
router.put('/:entryId', (req,res) => {
    console.log("you hit the update route.")
})


//DeleteRoute --> DONE //deletes data
router.delete('/:entryId', (req, res) => {
    const entryId = req.params.entryId;
    db.Entry.findByIdAndDelete(entryId, (err) => {
        if (err) return console.log(err)
        res.redirect('/entry');
    })
})

module.exports = router;