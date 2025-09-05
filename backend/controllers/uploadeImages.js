import fs from 'fs'
import path from 'path'

import Resume from '../models/resumeModel.js'
import uploade from '../middleware/uploademiddleware.js'
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
 if(!resume){
    return res.status(404).json({message: "Resume not found or unauth"})
 }

 const uploadesFolder = path.join(process.cwd(), "uploads")
 const baseUrl = `${req.protoco}://${req.get("host")}`

 const newThumbnail = req.files.thumbnail?.[0];
 const newProfileImage = req.files.profileImage?.[0];

 if(newThumbnail) {
    if(resume.thumbnailLink) {
       
        const oldThumbnail = path.join(uploadesFolder, path.basename(resume.thumbnailLink))
        if(fs.existsSync(oldThumbnail))
        fs.unlinkSync(oldThumbnail)
    }

    resume.thumbnailLink= `${baseUrl}/uploads${newThumbnail.filename}`
 }
 
 if(newProfileImage) {
    if(resume.profileInfo?.profilePreviewUrl) {
       
        const oldProfile = path.join(uploadesFolder, path.basename(resume.profileInfo.profilePreviewUrl))
        if(fs.existsSync(oldProfile))
        fs.unlinkSync(oldProfile)
    }

    resume.profileInfo.profilePreviewUrl= `${baseUrl}/uploads${newProfileImage.filename}`
 }

await resume.save();
res.status(200).json({
    message: "Image uploaded successfully",
    thumbnailLink: resume.thumbnailLink,
    profilePreviewUrl: resume.profileInfo.profilePreviewUrl
})


        })

    } catch (error) {
console.error("Error uploading image",error);
res.status(500).json({
    message: "Failed to uploads images",
    error: error.message
})
    }
}