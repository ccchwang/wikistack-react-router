const express = require('express');
const router = express.Router();
const models = require('../models');
const Promise = require('bluebird');
const Page = models.Page;
const User = models.User;
module.exports = router;

// /api/users
router.get('/', function (req, res, next) {

    User.findAll({})
      .then(users => {
        res.json(users);
      })
      .catch(next);

});

// /api/users/(dynamicvalue)
router.get('/:userId', function (req, res, next) {

  const findUser = User.findById(req.params.userId);

  const findPages = Page.findAll({
    where: {
      authorId: req.params.userId
    }
  });

  Promise.all([findUser, findPages])
    .spread(function (user, userPages) {
      res.json({
        pages: userPages,
        user: user
      });
    })
    .catch(next);

});
