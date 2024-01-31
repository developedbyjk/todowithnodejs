import express from 'express';
import {getAllUsers, register, getMyProfile, login, logout} from '../controllers/user.js';
import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();



// router.get("/all", getAllUsers);

router.post('/new', register);

router.post('/login', login);
router.get('/logout', logout)

router.get("/me",isAuthenticated, getMyProfile);

    // router.get('/userid/:id',getUserDetails)
//  router("userid/:id").get(getUserDetails).put(updateUser).delete(deleteUser);



export default router;