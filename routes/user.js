import express from 'express';
import {User} from '../models/user.js';
import {getAllUsers, register, getUserDetails} from '../controllers/user.js';

const router = express.Router();

router.get("/all", getAllUsers)


    router.post('/new', register)


    // router.get('/userid/:id',getUserDetails)
 router("userid/:id").get(getUserDetails).put(updateUser).delete(deleteUser);



export default router;