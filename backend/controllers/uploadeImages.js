import fs from 'fs'
import path from 'path'

import Resume from '../models/resumeModel'
import uploade from '../middleware/uploademiddleware'
import { error } from 'console'

export const uploadResumeImages = async (requestAnimationFrame, res) => {
    try{

        uploade.fields([{ name: "thumbnail" }, {name: "profileImage"}])

        (req, res, async (arr) => {
            if(err) {
  return res.status(400).json({ message: "File uploade failed", error: err.message})
            }

            const resumeId = req.params.id;
          const resume = await Resume.findOne({_id: resumeId, userId: req.user._id})
        })

    } catch (error) {

    }
}