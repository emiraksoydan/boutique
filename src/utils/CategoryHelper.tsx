import type { Category } from "../types/CategoryDto";

export const getCategoryDisplayName = (
    category: Category,
    allCategories: Category[],
    chain: string[] = []
): string => {
    const updatedChain = [category.categoryName, ...chain];
    const parent = allCategories.find(cat => cat.categoryID === category.parentID);

    if (parent) {
        return getCategoryDisplayName(parent, allCategories, updatedChain);
    }

    return updatedChain.join(' > ');
};
