import express from "express";
const router = express.Router();
import {
    authUser,
    registerhUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUserByID,
    deleteUserByID,
    updateUserByID,
} from "../controllers/userController.js";

router.route("/").post(registerhUser).get(getUsers);
router.post("/logout", logoutUser);
router.post("/login", authUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);
router
    .route("/:id")
    .delete(deleteUserByID)
    .get(getUserByID)
    .put(updateUserByID);

export default router;
