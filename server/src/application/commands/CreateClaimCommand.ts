class CreateClaimCommand {
  private readonly id: string
  private readonly owner: string
  private readonly tittle: string
  private readonly description: string
  private readonly category: string
  private readonly location: string
  private readonly pin : string

  public constructor (
    id: string,
    owner: string,
    tittle: string,
    description: string,
    category: string,
    location: string,
    pin : string

  ) {
    this.id = id
    this.owner = owner
    this.tittle = tittle
    this.description = description
    this.category = category
    this.location = location
    this.pin = pin
  }

  public getPin () : string {
    return this.pin
  }

  public getId (): string {
    return this.id
  }

  public getOwnerId (): string {
    return this.owner
  }

  public getTittle (): string {
    return this.tittle
  }

  public getDescription (): string {
    return this.description
  }

  public getCategoryId (): string {
    return this.category
  }

  public getLocation (): string {
    return this.location
  }
}

export default CreateClaimCommand
