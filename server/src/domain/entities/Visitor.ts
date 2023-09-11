import { Nullable } from "../valueObjects/Nullable";

export class Visitor {
    private readonly id: string;
    private ip: string;
    private nickName: string;


    private constructor(
        id: string,
        ip: string,
        nickName: string,
    ) {
        this.id = id;
        this.ip = ip;
        this.nickName = nickName;
    }
}