import prismaCLient from "../../prisma/index";

interface ProductByCategoryId {
  category_id: string;
}

class ListProductByCategoryService {
  async execute({ category_id }: ProductByCategoryId) {
    const findByCategory = await prismaCLient.product.findMany({
      where: {
        category_id: category_id,
      },
    });
    return findByCategory;
  }
}

export { ListProductByCategoryService };
