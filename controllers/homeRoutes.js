const router = require('express').Router();
const { User, Vendors, Products, Rides } = require('../models');
const withAuth = require('../utils/auth');

router.get("/login", async(req, res)=> {
    res.render("login")
});

router.get('/', async(req, res) => {
 try {
     res.render("homepage");           // might not await later
    }catch (err) {     
 }
});





//post route for saving/ every turn post route/completed

module.exports = router;