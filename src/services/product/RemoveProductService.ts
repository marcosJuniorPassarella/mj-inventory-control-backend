import prismaCLient from '../../prisma/index';
import { RemoveProductRequest } from '../../models/interfaces/product/RemoveProductRequest';

class RemoveProductService {
    async execute({ product_id }: RemoveProductRequest) {
        const removeProduct = await prismaCLient.product.delete({
            where: {
                id: product_id
            },
        });
        return removeProduct;
    }
}

export { RemoveProductService };