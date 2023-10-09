import { Claim } from "domain/entities/Claim"

class CreateClaimCommand {
  private readonly id: string
  private readonly owner: string
  private readonly tittle: string
  private readonly description: string
  private readonly category: string
  private readonly location: string
  private readonly createdAt: Date
  private readonly cloneOf: Claim

  public constructor (
    id: string,
    owner: string,
    tittle: string,
    createdAt: Date,
    cloneOf: Claim,
    description: string,
    category: string,
    location: string

  ) {

    this.id = id
    this.owner = owner
    this.tittle = tittle
    this.createdAt = createdAt
    this.cloneOf = cloneOf
    this.description = description
    this.category = category
    this.location = location
  }

  public getId (): string {
    return this.id
  }

  public getOwner (): string {
    return this.owner
  }

  public getTittle (): string {
    return this.tittle
  }

  public getCreatedAt (): Date {
    return this.createdAt
  }

  public getCloneOf (): Claim {
    return this.cloneOf
  }

  public getDescription (): string {
    return this.description
  }

  public getCategory (): string {
    return this.category
  }

  public getLocation (): string {
    return this.location
  }
}

export default CreateClaimCommand
