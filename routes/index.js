const router = require('express').Router();
const apiRoutes = require('./api');

// route to api
router.use('/api', apiRoutes);

module.exports = router;
