class CreateClaimCommand {
  private readonly id: string
  private readonly owner: string
  private readonly tittle: string
  private readonly description: string
  private readonly category: string
  private readonly location: string
  private readonly createdAt: Date
  private readonly cloneOf: Date

  public constructor (
    id: string,
    owner: string,
    tittle: string,
    createdAt: Date,
    cloneOf: Date,
    description: string,
    category: string,
    location: string

  ) {
    if (createdAt.getTime() > cloneOf.getTime()) {
      throw new Error('(createdAt) date must be before (cloneOf) date')
    }

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

  public getCloneOf (): Date {
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
