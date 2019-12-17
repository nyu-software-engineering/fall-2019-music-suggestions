const router = require('express').Router();
let User = require('../models/user.model');
//let UserSession = require('../models/userSession.model');
const jwt = require('jsonwebtoken');
const checkAuth = require('../middleware/check_auth');
require('dotenv').config({ path: '../nodemon.json' });

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  User.find(
    {username: username}, (err, previousUser) => {
      if(err){
        res.end('Error: Server Error');
      }
      else if(previousUser.length > 0){
        res.end("Error: Username already exists");
      }



  const newUser = new User({email, username, password});

  newUser.password = newUser.generateHash(password);

  newUser.save()
    .then(() => res.json('User added!'))
    
    .catch(err => res.status(400).json('Error: ' + err));
    });
});


router.route('/login').post((req, res) => {

  const username = req.body.username;
  const password = req.body.password;

  User.findOne({username: username}, function(err, users){
    if(err){
      return res.status(400).json('Error: ' + err);
    }
    if(!users){
      return res.status(404).json('Error: ' + 'Username not found');
    }

    //const user = users[0];

    if(!users.validPassword(password)){
      return res.send({
      success: false,
      message: "Error: Invalid password"
      });
    }

    /*
    return res.status(200).send({
      success: true,
      message: "User Signed in!"
    });
    */

    //create userSession
    /* const userSession = new UserSession();
    userSession.userId = users._id;
    userSession.save((err, doc) => {
      if(err){
        return res.status(400).json('Error: ' + err);
      }
      return res.status(200).send({
        success: true,
        message: 'Valid Signin!',
        token: doc._id
      });
    });*/
    const web_token = jwt.sign({
        userId: users._id
    },
    "MusicSuggestions",
    {
      expiresIn: "1h"
    });

    return res.status(200).send({
      success: true,
      message: 'Valid Signin!',
      token: web_token
    });

  });

});




router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(users => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(users => {
      users.username = req.body.username;
      users.password = req.body.password;

      users.save()
        .then(() => res.json('User updated.'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
