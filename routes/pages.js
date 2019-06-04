const router=require('express').Router();

//controllers
const pagesController=require('../controllers/pagesController');

// routes
router.get('/', pagesController.show);
router.get('/about', pagesController.show);
router.get('/contact', pagesController.show);


module.exports=router;