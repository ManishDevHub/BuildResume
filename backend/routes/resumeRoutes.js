import express from 'express'
import {protect} from '../middleware/authmiddleware.js'
import {createResume, deleteResume, getResumeById, getUserResume, updateResume} from '../controllers/resumeController.js'
import { uploadResumeImages } from '../controllers/uploadeImages.js'

const  resumeRouter = express.Router()


resumeRouter.post('/', protect, createResume)
resumeRouter.get('/',protect, getUserResume)
resumeRouter.get('/',protect,getResumeById)

resumeRouter.put('/:id', protect, updateResume)
resumeRouter.put('/:id/uploade-image', uploadResumeImages )

resumeRouter.delete('/:id', protect,deleteResume)

export default resumeRouter;