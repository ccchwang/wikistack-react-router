const express = require('express');
const router = express.Router();
const models = require('../models');
const Page = models.Page;
const User = models.User;
module.exports = router;

// GET /api/wiki
router.get('/', function (req, res, next) {

  Page.findAll({})
    .then(pages => {
      res.json(pages);
    })
    .catch(next);

});

// POST /api/wiki
router.post('/', function (req, res, next) {

  User.findOrCreate({
    where: {
      name: req.body.name,
      email: req.body.email
    }
  })
  .spread((user, createdPageBool) => {
    return Page.create(req.body)
      .then(function (page) {
        return page.setAuthor(user);
      });
  })
  .then(page => {
    res.json(page);
  })
  .catch(next);

});

// GET /api/search
router.get('/search', function (req, res, next) {

  Page.findByTag(req.query.search)
    .then(pages => {
      res.json(pages);
    })
    .catch(next);

});

// POST /api/wiki/(dynamicvalue)
router.post('/:urlTitle', function (req, res, next) {

  Page.update(req.body, {
    where: {
      urlTitle: req.params.urlTitle
    },
    returning: true
  })
  .spread((updatedRowCount, updatedPages) => {
    res.json(updatedPages);
  })
  .catch(next);

});

// GET /api/wiki/(dynamicvalue)/delete
router.get('/:urlTitle/delete', function (req, res, next) {

  Page.destroy({
    where: {
      urlTitle: req.params.urlTitle
    }
  })
  .then(() => {
    res.status(204).end();
  })
  .catch(next);

});

function generateError (message, status) {
    let err = new Error(message);
    err.status = status;
    return err;
}

// GET /api/wiki/(dynamic value)
router.get('/:urlTitle', function (req, res, next) {

  Page.findOne({
    where: {
      urlTitle: req.params.urlTitle
    },
    include: [
      { model: User, as: 'author' }
    ]
  })
  .then(page => {
    if (page === null) {
      throw generateError('No page found with this title', 404);
    } else {
      res.json(page);
    }
  })
  .catch(next);

});

// PUT /api/wiki/(dynamicvalue)/edit
router.put('/:urlTitle/edit', function (req, res, next) {

  Page.findOne({
    where: {
      urlTitle: req.params.urlTitle
    },
    include: [
      { model: User, as: 'author' }
    ]
  })
  .then(page => {
    if (page === null) {
      //to show you sendStatus in contrast to using the error handling middleware above
      res.sendStatus(404);
    } else {
      res.json(page);
    }
  })
  .catch(next);

});

// GET /api/wiki/(dynamic value)/similar
router.get('/:urlTitle/similar', function (req, res, next) {

  Page.findOne({
    where: {
      urlTitle: req.params.urlTitle
    }
  })
  .then(page => {
    if (page === null) {
      throw generateError('No pages correspond to this title', 404);
    } else {
      return page.findSimilar()
        .then(pages => {
          res.json(pages);
        });
    }
  })
  .catch(next);

});
