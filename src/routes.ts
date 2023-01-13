import { Router } from "express";
import multer from "multer";
import uploadConfig from "./config/multer";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { RemoveCategoryController } from "./controllers/category/RemoveCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListProductByCategoryController } from "./controllers/product/ListProductByCategoryController";
import { ListProductsController } from "./controllers/product/ListProductsController";
import { RemoveProductController } from "./controllers/product/RemoveProductController";
import { SaleProductController } from "./controllers/sale/SaleProductController";
import { RemoveUserController } from "./controllers/user/RemoveUserController";
import { EditProductController } from "./controllers/product/EditProductController";

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

// User Routes
router.post("/user", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);
router.delete("/user/remove", new RemoveUserController().handle);

// Category Routes
router.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle
);
router.get("/category", isAuthenticated, new ListCategoryController().handle);
router.delete(
  "/category/remove",
  isAuthenticated,
  new RemoveCategoryController().handle
);

// Product Routes
router.post(
  "/product",
  isAuthenticated,
  upload.single("file"),
  new CreateProductController().handle
);
router.put(
  "/product/edit",
  isAuthenticated,
  upload.single("file"),
  new EditProductController().handle
);
router.delete("/product/remove", isAuthenticated, new RemoveProductController().handle);
router.get("/product", isAuthenticated, new ListProductByCategoryController().handle);
router.get("/products", isAuthenticated, new ListProductsController().handle);

// Sale Routes
router.put("/sale/product", isAuthenticated, new SaleProductController().handle);

export { router };
