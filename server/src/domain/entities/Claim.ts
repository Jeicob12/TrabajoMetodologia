import { Visitor } from './Visitor';
import { Category } from './Category';
import {Nullable} from "../valueObjects/Nullable";

export class Claim{
    private id: string;
    private owner: Visitor;
    private tittle: string;
    private desciption: string;
    private category: Category;
    private location: string;
    private createdAt: Date;
    private cloneOf: Claim;


    private constructor(
        id: string,
        owner: Visitor,
        tittle: string,
        desciption: string,
        category: Category,
        location: string,
        createdAt: Date,
        cloneOf: Claim,
    ) {
        this.id = id;
        this.owner = owner;
        this.tittle = tittle;
        this.desciption = desciption;
        this.category = category;
        this.location = location;
        this.createdAt = createdAt;
        this.cloneOf = cloneOf;
    }
}