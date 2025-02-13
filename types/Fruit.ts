export interface Fruit {
    id: number;
    name: string;
    family: string;
    genus: string;
    order: string;
    nutritions: Nutrition;
}

export interface Nutrition {
    carbohydrates: number;
    protein: number;
    fat: number;
    calories: number;
    sugar: number;
}

export interface NutritionFilter {
    min: number;
    max: number;
}

export interface Filter {
    carbohydrates: NutritionFilter
    protein: NutritionFilter
    fat: NutritionFilter
    calories: NutritionFilter
    sugar: NutritionFilter
}