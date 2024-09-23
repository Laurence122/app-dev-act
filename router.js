const express = require('express');
const router = express.Router();
const controls = require('../controler/controls.cc.');
router.get('/', controls.cc);
module.export = router;