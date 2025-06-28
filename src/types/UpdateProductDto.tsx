import type { ResultProductDto } from "./ResultProductDto";

export type UpdateProductDto = Omit<ResultProductDto, 'productPrice'> & {
    productPrice: number;
};
