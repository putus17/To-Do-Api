import { Router } from "express";
import { register, login, getProfile } from "../controllers/authControllers";
import { authenticate } from "../middleware/authMiddleware";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get('/me', authenticate, getProfile)


export default router;
