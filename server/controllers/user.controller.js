import User from "../models/user.model.js";


export const getUser = async (req, res) => {
    const { id } = req.body;
    try {
        const user = await User.findOne({ _id:id });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        console.log("User Found");
        res.status(200).json(user);

    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
}

export const getUserByRole= async(req,res)=>{
    const {uid}=req.params;
    try{
        const user = await User.findOne({uid});
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        console.log("User found by role");
        res.status(200).json({role:user.role});
    }catch(error){
        res.status(500).json({ message: "Server Error" });
    }
}

export const createUser = async (req, res) => {
    const { uid, email, name, password,role,state } = req.body;
    try {
        const user = await User.findOne({ uid });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        const newUser = new User({ uid, email, name, password,role,state });
        await newUser.save();
        console.log("User created Successfully");
        res.status(203).json(newUser);
    }
    catch (error) {
        console.error(error);
        res.status(401).json({ message: "User not created" });
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteUser = await User.findOneAndDelete({ _id:id });
        if (!deleteUser) {
            return res.status(404).json({ message: "User not found" });
        }
        console.log("User deleted successfully");
        res.status(200).json({ message: "User deleted Successfully" });


    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "User not deleted due to internal error" })
    }
}