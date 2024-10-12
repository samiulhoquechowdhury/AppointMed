import validator from "validator";
import bcrypt from "bcrypt";
import { v2 as cloudanary } from "cloudinary";

//api for adding doctors
const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      fee,
      address,
    } = req.body();
    const imageFile = req.file;
    //checking for all data to add doctor
    if (
      !name ||
      !email ||
      !password ||
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      !fee ||
      !address
    ) {
      return res.json({ success: false, message: "All fields are required" });
    }

    //validate email format

    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }
    //validating strong password
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }

    //hashing doctor password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // upload images to cloudanary
    const imageUpload = await cloudanary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
  } catch (error) {
    console.error(error.message);
  }
};

export { addDoctor };
