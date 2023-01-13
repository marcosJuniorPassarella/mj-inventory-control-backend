import { Request, Response } from "express";
import { EditProductRequest } from "../../models/interfaces/product/EditProductRequest";
import { EditProductService } from "../../services/product/EditProductService";

class EditProductController {
  async handle(req: Request, res: Response) {
    const {
      amount,
      banner,
      description,
      name,
      price,
      product_id,
    }: EditProductRequest = req.body;
    const editProductService = new EditProductService();
    const productEdited = editProductService.execute({
      amount,
      banner,
      description,
      name,
      price,
      product_id,
    });
    return res.json(productEdited);
  }
}
export { EditProductController };
