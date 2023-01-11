import prismaCLient from "../../prisma/index";
import { RemoveCategoryRequest } from "../../models/interfaces/RemoveCategoryRequest";

class RemoveCategoryService {
  async execute({ category_id }: RemoveCategoryRequest) {
    const category = await prismaCLient.category.delete({
      where: {
        id: category_id,
      },
    });
    return category;
  }
}

export { RemoveCategoryService };
