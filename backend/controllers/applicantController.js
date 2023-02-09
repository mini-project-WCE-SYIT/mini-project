const Applicant = require('../models/Applicant');
const {StatusCodes} = require('http-status-codes')
const customError = require('../errors');
const catchAsync = require('../middlewares/catchAsync');

//multer
const multer = require('multer');  

const multerStorage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,'./uploads/');
    },
    filename:(req,file,cb) =>{
        const ext = file.mimetype.split('/')[1];
        cb(null,`user-${Date.now()}-${Date.now()}.${ext}`);
    }
});
const multerFilter = (req,file,cb) => {
    if(file.mimetype.startsWith('image')){
        cb(null,true);
    }
    else{
        cb(null,);
    }
}
const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
});

const uploadSettings = upload.single('image');



const createTranscript = catchAsync(async(req,res) => {
    const {name,prn,YOS,branch,address,contactNo,copies,certificates,originals,photoCopies,universityDetails} = req.body;
    const fees = copies*700;
    const applicant = await Applicant.create({name,prn,YOS,branch,address,contactNo,copies,certificates,originals,photoCopies,universityDetails,fees});
    res.status(StatusCodes.CREATED).json({applicant});
});

const uploadFile = catchAsync(async(req,res) => {
    const file = req.file;
    if(!file){
        throw new customError.BadRequestError('Please provide a image');
    }
    const name = req.body.name;
    const yearSem = req.body.yearSem;
    const applicant = await Applicant.findOne({ name });
    if(!applicant){
        throw new customError.BadRequestError('Please provide a name');
    }
    imageURL = `http://localhost:5000/static/${file.filename}`;
    applicant.ReportDetails.push({ imageURL,yearSem })
    await applicant.save();
    res.status(StatusCodes.CREATED).json({ applicant })

});

module.exports =  {createTranscript,uploadSettings,uploadFile}