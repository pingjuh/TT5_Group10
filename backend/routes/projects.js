const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
const Projects =  require('../models/Projects')
/* GET users listing. */
router.get('/', function(req, res, next) {

  res.send('projects route');
});

// router.post('/login', async function(req, res, next) {
//     const filter={username: req.body.username, password: req.body.password}
//     try{
//         const users = await User.findOne(filter)
//         return res.send(users)
//     }catch (err) {
//         console.log(err);
//         return res.status(400).json({
//           error: true,
//           message: "Error",
//         });
//       }
    
    
//   });

  router.post('/allProjects', 
  // auth, 
  async function(req, res, next) {
    console.log(req.body.id)
      try{
        const userid = req.body.id // replace with userid.id and uncomment middleware for jwt auth.
        console.log(req.user)
        console.log(userid.id)
        const projects = await Projects.find({id: userid})
        console.log(projects)
        return res.send(projects)
      }catch (err) {
        console.log(err);
        return res.status(400).json({
          error: true,
          message: "Failed to retrieve",
        });
      }
      return res.send("No projects yet")
});

module.exports = router;

