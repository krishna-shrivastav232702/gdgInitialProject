import {v2 as cloudinary} from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath)=>{
    try {
        if (!localFilePath) return null;

        console.log("Response started to upload");
        
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });

        console.log(response);
        console.log("File uploaded successfully");

        return response;
    } catch (error) {
        console.error("Error uploading to Cloudinary",error);

        if(fs.existsSync(localFilePath)){
            fs.unlinkSync(localFilePath);
            console.log(`Deleted Local file:${localFilePath}`);
        }else{
            console.warn(`File not found , could not  delete:${localFilePath}`);
        }
        
        return null;
    }
}

export default uploadOnCloudinary;