import {Nullable} from "../valueObjects/Nullable";
//import {v4} from 'uuid';

export class Category{
    private id: string;
    private name: string;
    private color: string;

    private constructor(
        id: string,
        name: string,
        color: string,
    ) {
        this.id = id;
        this.name = name;
        this.color = color;
    }

    public static create(ip: string, name: string, color: string): Category {

        const id += id;
        const category = new Category(id, name, color);
        category.name = name;
        category.color = color;
    
        // Add record event for open/closed principle
        return category;
    }
}
