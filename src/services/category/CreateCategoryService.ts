import { CategoryRequest } from "../../models/interfaces/category/CategoryRequest";
import prismaCLient from "../../prisma";

class CreateCategoryService {
    async execute({ name }: CategoryRequest) {
        if (name === "" || name === null || !name) {
            throw new Error("Invalid name");
        }
        const category = await prismaCLient.category.create({
            data: {
                name: name,
            },
            select: {
                id: true,
                name: true,
            },
        });
        return category;
    }
}

export { CreateCategoryService };
