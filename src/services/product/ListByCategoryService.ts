import prismaCLient from "../../prisma/index";

class ListByCategoryService {
  async execute(category_id: string) {
    const findByCategory = await prismaCLient.product.findMany({
      where: {
        category_id: category_id,
      },
    });
    return findByCategory;
  }
}

export { ListByCategoryService };
