import prismaCLient from "../../prisma/index";

class ListProductService {
  async execute() {
    const products = await prismaCLient.product.findMany({
      select: {
        id: true,
        name: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });
    return products;
  }
}

export { ListProductService };
