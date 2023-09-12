import { Visitor } from './Visitor';
import { Category } from './Category';
import {v4} from 'uuid';
import {Nullable} from "../valueObjects/Nullable";

export class Claim{

    private id: string;
    private owner: Visitor;
    private tittle: string;
    private desciption: string;
    private category: Category;
    private location: string;
    private createdAt: Date;
    private cloneOf?: Claim;


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

    public static create(ip: string, owner: Visitor, tittle: string,desciption: string, category: Category, location: string,createdAt: Date,cloneOf: Claim,): Claim {

        const id = v4();
        const claim = new Claim(id, owner, tittle, desciption, category, location, createdAt,cloneOf );
        claim.owner = owner;
        claim.tittle = tittle;
        claim.desciption = desciption;
        claim.category = category;
        claim.location = location;
        claim.createdAt = createdAt
        claim.cloneOf = cloneOf
    
        // Add record event for open/closed principle
        return claim;
    }
}