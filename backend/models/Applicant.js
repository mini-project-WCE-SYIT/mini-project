const mongoose = require('mongoose');   

const applicantSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,' Please provide a username']
    },
    prn:{
        type: String,
        required: [true,' Please provide a prn']
    },
    YOS:{
        type: String,
        required: [true,' Please provide a year of study']
    },
    branch:{
        type: String,
        enum: ['IT', 'CSE', 'Electronics', 'Electrical', 'Civil', 'Mechanical'],
        required: [true,' Please provide your branch'],

    },
    address:{
        type: String,
        required: [true,' Please provide your address'],

    },
    contactNo:{
        type: String,
        required: [true,' Please provide your Contact Number'],

    },
    copies:{
        type: Number,
        default: 1
    },
    certificates:{
        type:String,
        enum:['Consolidated Mark sheet','Provisional Certificate','Degree Certificate']
    },
    originals:{
        type: Boolean,
        required: [true],
    },
    photoCopies:{
        type: Boolean,
        required: [true],
    },
    universityDetails:{
        type: Boolean,
        required: [true],
    },
    fees:{
        type:Number
    },
    role:{
        type:String,
        enum:['admin','user'],
        default: 'user'
    },
    ReportDetails:[
        {
            imageURL:{
                type: String,
                required: [true,'please provide a image']
            },
            yearSem:{
                type: String,
                required: [true,'please provide year and sem']
            },
        }
    ]
});


applicantSchema.methods.addReportDetails = function(imageURL,yearSem){
    this.ReportDetails.push({imageURL,yearSem});
    return this.save();
}


module.exports = mongoose.model("Applicant", applicantSchema);