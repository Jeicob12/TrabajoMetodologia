import { Claim } from "../../domain/entities/Claim"

class ClaimRepository{

    private Claims : Claim[];

    constructor() {
        this.Claims = [];
      }
}
