import { Router } from "express";
import { signin, signup } from "../controller/auth/user_auth.js";
import { authenticate } from "../middleware/auth_middleware.js";
const authRouter = Router();

authRouter.post("/signup", signup);
authRouter.post("/signin", signin);

authRouter.get("/check_auth", authenticate, (req, res) => {
  res.status(200).json({
    status: true,
    data: {
      user: req.user,
    },
  });
});

export default authRouter;
