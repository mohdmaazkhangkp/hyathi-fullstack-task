import jwt from "jsonwebtoken";
const JWT_SECRET = "dfsdvsdvd"

export const sendCookie = (user, res, message, statusCode=200)=>{
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET)

    res.status(statusCode).cookie("token", token, {
        httpOnly: true,
        maxAge: 15 * 60 * 1000
    })
        .json({
            successs: true,
            message,
        })
}