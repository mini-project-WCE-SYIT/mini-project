const express = require('express');
const router = express.Router();
const {createTranscript,uploadSettings, uploadFile} = require('../controllers/applicantController');
router.route('/createtranscript').post(createTranscript);
router.route('/upload').post(uploadSettings,uploadFile);

module.exports = router;