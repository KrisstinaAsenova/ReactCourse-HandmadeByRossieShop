import express, { Router } from 'express';
import User from '../models/userModel';

const router =  express.Router();

router.get("/createadmin", async (req, res) => {
   
    try {
        const user = new User({
            name:'Krisi',
            email:'***@abv.bg',
            password: '1234',
            isAdmin: true
        });
    
        const newUser = await user.save();
        res.send(newUser);
        
    } catch (error) {
        res.send({meg: error.message});
    }
});

export default router;