import express from "express";
const router = express.Router();
import UserController from "../controllers/userController.js";
import upload from "../../../middlewares/upload-middleware.js";
import checkUserAuth from "../../../middlewares/auth-middleware.js";

router.post('/register', upload.fields([{name: 'userProfile', maxCount: 1}]) , UserController.userRegistration)
router.post('/login', UserController.userLogin)
router.get('/changepassword', checkUserAuth, UserController.changeUserPassword)

export default router;