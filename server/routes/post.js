import express from "express";
import * as controllers from "../controllers/posts.js";
import authentication from "../middleware/authentication.js";

const router = express.Router();

router.get("/", controllers.getPosts);
router.get("/:id", controllers.getPost);
router.post("/", authentication, controllers.createPost);
router.patch("/:id", authentication, controllers.updatePost);
router.delete("/:id", authentication, controllers.deletePost);
router.patch("/:id/likePost", authentication, controllers.likePost);

export default router;
