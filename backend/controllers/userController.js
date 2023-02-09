const User = require('../models/User');
const customError = require('../errors')
const {StatusCodes}  = require('http-status-codes');
const catchAsync = require('../middlewares/catchAsync');

const createUser = catchAsync(async(req,res,next)=>{
    const {username,password} = req.body;
    if(!username || !password){
      throw new customError.BadRequestError('Please provide the credentials');
    }
    const user = await User.create({username,password});
    res.status(StatusCodes.CREATED).json({user});
})

const login = catchAsync(async(req,res) => {
    const {username,password} = req.body;
    if(!username || !password){
        throw new customError.BadRequestError('Please provide the credentials');
    }
    const user = await User.findOne({ username });
    if(!user){
        throw new customError.NotFoundError(`No user with id ${username}`);
    }
    else if(!(user.password === password)){
        res.status(400).json({msg : 'Incorrect username or password'});
    }
    else{
        res.status(StatusCodes.OK).json({ msg: 'Successfully logged in' }); 
    }

});

module.exports = {createUser,login};