import { Router } from 'express';
import { ComponentController } from '../controllers/componentController.js';

export const componentRouter = Router()

componentRouter.post('/register', ComponentController.registerComponent)
componentRouter.get('/getAllComponents', ComponentController.getAllComponents)
componentRouter.get('/getComponentsByUser', ComponentController.getComponentsByUser)
componentRouter.get('/getComponentsAvailable', ComponentController.getComponentsAvailable)
componentRouter.post('/request', ComponentController.componentRequest)