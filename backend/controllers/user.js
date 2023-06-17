import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";



export const register = async (req, res) => {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });

    if (user) {
        return res.status(404).json({
            success: false, message: "User already exist"
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user = await User.create({ name, email, password: hashedPassword });

   sendCookie(user, res, "registered successfully", 201)
}

 export const login = async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email}).select("+password");
    if(!user){
        return res.status(404).json({
            success: false, message: "invalid email or password"
        });
    }
    const isMatch = await bcrypt.compare(password, user.password);
     if (!isMatch) {
         return res.status(404).json({
             success: false, message: "invalid email or password"
         });
     }
     sendCookie(user, res, `welcome back, ${user.name}`, 200)
 }