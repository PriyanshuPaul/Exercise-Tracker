const router=require('express').Router();
let User=require('../modals/user.modal');

//first endpoint HTTP get request
router.route('/').get((req,res)=>{
    User.find()//mongoose method to get all users from the MONGODB ATLAS database
        .then(users=>res.json(users))
        .catch(err=>res.status(400).json('Error: '+err));
});

//second endpoint to handle HTTP post request
router.route('/add').post((req,res)=>{
    const username=req.body.username;
    const newUser=new User({username});

    newUser.save()//to save user to the database
    .then(()=>res.json('User added!'))
    .catch(err=>res.status(400).json('Error: '+err));
});
module.exports=router;