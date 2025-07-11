import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

const authUser = asyncHandler(async (req, res) => {
    res.send("auth user");
});
const registerhUser = asyncHandler(async (req, res) => {
    res.send("register user");
});
const logoutUser = asyncHandler(async (req, res) => {
    res.send("logout user");
});
const getUserProfile = asyncHandler(async (req, res) => {
    res.send("get user profile");
});
const updateUserProfile = asyncHandler(async (req, res) => {
    res.send("update user profile");
});
const getUsers = asyncHandler(async (req, res) => {
    res.send("get users");
});
const getUserByID = asyncHandler(async (req, res) => {
    res.send("get user by id");
});
const deleteUserByID = asyncHandler(async (req, res) => {
    res.send("delete user by id");
});
const updateUserByID = asyncHandler(async (req, res) => {
    res.send("update user by id");
});

export {
    authUser,
    registerhUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUserByID,
    deleteUserByID,
    updateUserByID,
};
