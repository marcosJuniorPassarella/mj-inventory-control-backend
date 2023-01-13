import { EditCategoryRequest } from "../../models/interfaces/category/EditCategoryRequest";
import prismaCLient from "../../prisma/index";

class EditCategoryService {
  async execute({ category_id, name }: EditCategoryRequest) {
    if (category_id === " " || name === " " || !category_id || !name) {
      throw new Error("Invalid arguments to edit category");
    }

    const productEdited = await prismaCLient.category.update({
      where: {
        id: category_id,
      },
      data: {
        name: name,
      },
    });
    return productEdited;
  }
}

export { EditCategoryService };
