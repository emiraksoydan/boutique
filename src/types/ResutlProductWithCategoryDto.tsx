import type { Category } from "./CategoryDto";
import type { ResultProductDto } from "./ResultProductDto";

export interface ResultProductWithCategoryDto extends ResultProductDto {
    category: Category
}

