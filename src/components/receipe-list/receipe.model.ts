export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public detail: string;

    constructor(name: string, desc: string, imagePath: string, detail: string) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.detail = detail;
    }
}