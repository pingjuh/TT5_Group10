const express = require('express');
const router = express.Router();
const User =  require('../models/Users')
const jwt = require('jsonwebtoken');

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.send('auth route');
});

router.post('/login', async function(req, res, next) {
    const filter={username: req.body.username, password: req.body.password}
    try{
        const users = await User.findOne(filter)
        if (!users){
            // if username and password does not exist
            return res.sendStatus(403)
        }
        return res.send({users, "jwt": generateToken(users)})
    }catch (err) {
        console.log(err);
        return res.status(403).json({
          error: true,
          message: "Error",
        });
      }
    
    
  });

  router.get('/addUser', async function(req, res, next) {
      const user = new User({
          username:"personone",
          password: "person1password",
          name: "Person one name",
          appointment: "staff"

      })
      try{
          await user.save()
          return res.sendStatus(200)
      }catch (err) {
        console.log(err);
        return res.status(400).json({
          error: true,
          message: "Failed to save",
        });
      }
    res.sendStatus(200);
});

function generateToken(user) {
    console.log(user)

    if (!user) return null;
  
    const u = {
      id: user.id,
      username: user.username,
      name: user.name,
      role: user.appointment,
    };

    return jwt.sign(u, process.env.jwtSecret, {
      expiresIn: 60 * 60 * 24,
    });
  }


module.exports = router;

