import { Router } from "express";
import {
    login,
    register,
    logout,
    profile,
    products,
    productsById,
    cartProducts,
    realTimeProducts,
    chat,
    home
} from "../controllers/view.controller.js";
import { verifyAuth } from "../middlewares/auth.js";

const router = Router();

router.get("/login", login);
router.get("/register", register);
router.get("/logout", logout);
router.get("/profile", verifyAuth, profile);
router.get("/products", verifyAuth, products);
router.get("/products/:pid", verifyAuth, productsById);
router.get("/cart/:cid", verifyAuth, cartProducts);
router.get("/realtimeproducts", realTimeProducts);
router.get("/chat", chat);
router.get("/home", home);

export default router;