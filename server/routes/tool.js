import { Router } from 'express';
import { ToolController } from '../controllers/toolController.js';

export const toolRouter = Router()

toolRouter.post('/register', ToolController.registerTool)
toolRouter.get('/getAllTools', ToolController.getAllTools)
toolRouter.get('/getToolsByUser', ToolController.getToolsByUser)
toolRouter.get('/getToolsAvailable', ToolController.getToolsAvailable)
toolRouter.post('/request', ToolController.toolRequest)