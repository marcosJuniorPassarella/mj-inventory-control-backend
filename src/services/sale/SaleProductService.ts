import prismaCLient from '../../prisma';
import { SaleProductRequest } from '../../models/interfaces/sale/SaleProductRequest';

class SaleProductService {
    async execute({ product_id, amount }: SaleProductRequest) {
        console.log('PRODUCT ID', product_id);
        console.log('AMOUNT', amount);
        const queryProduct = await prismaCLient.product.findFirst({
            where: {
                id: product_id
            },
        });

        if (queryProduct?.amount > amount && amount > 0) {
            const newAmount = (queryProduct?.amount - amount);
            const saveSale = await prismaCLient.product.update({
                where: {
                    id: product_id
                },
                data: {
                    amount: newAmount
                },
                select: {
                    id: true,
                    name: true,
                    amount: true
                }
            });
            return saveSale;
        } else {
            throw new Error("Não foi possível efetuar a venda!");
        }
    }
}

export { SaleProductService };