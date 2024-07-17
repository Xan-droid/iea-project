import { Router } from 'express';
import { UserController } from "../controllers/userController.js";

export const userRouter = Router()

userRouter.post('/validate', UserController.validateUser)
userRouter.get('/getProfile', UserController.getUserProfile)
userRouter.post('/register', UserController.registerUser)
userRouter.get('/getAllUsers', UserController.getAllUsers)
userRouter.get('/getUserName', UserController.getUserName)