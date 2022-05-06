const express = require('express');
const router = express.Router();
const User =  require('../models/Users')
/* GET users listing. */
router.get('/', function(req, res, next) {

  res.send('auth route');
});

router.post('/login', async function(req, res, next) {
    const filter={username: req.body.username, password: req.body.password}
    try{
        const users = await User.findOne(filter)
        return res.send(users)
    }catch (err) {
        console.log(err);
        return res.status(400).json({
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

module.exports = router;

