import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.model.js"

const registerUser = asyncHandler(async (req, res) => {
    // get user details from frontend
    // validation - not empty
    // check if user is already exist: username, email
    // check for images, avatar
    // upload them to cloudnary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check if user is created
    // return response

    const {fullName, username, email, password}= req.body
    console.log("Full name: ", fullName);

    if(
        [fullName, username, email, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = User.findOne({
        $or: [{username}, {email}]
    })

    console.log(existedUser);

    if(existedUser) {
        throw new ApiError(409, "User with email and username already exists")
    }

    req.files?.avatar[0]?.path

})

export {registerUser,}