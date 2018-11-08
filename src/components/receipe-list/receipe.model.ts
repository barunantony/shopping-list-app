import { Ingredient } from "src/shared/ingredient.model";

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public detail: string;
    public ingredients: Ingredient[];

    constructor(name: string, desc: string, imagePath: string, detail: string, ingredients: Ingredient[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.detail = detail;
        this.ingredients = ingredients;
    }
}