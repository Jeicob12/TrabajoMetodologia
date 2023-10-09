import { Visitor } from './Visitor'
import { Category } from './Category'
import { v4 } from 'uuid'
// import { Nullable } from '../valueObjects/Nullable'

export class Claim {
  private id: string
  private owner: Visitor
  private tittle: string
  private description: string
  private category: Category
  private location: string
  private createdAt: Date
  // eslint-disable-next-line no-use-before-define
  private cloneOf?: Claim

  private constructor (
    id: string,
    owner: Visitor,
    tittle: string,
    description: string,
    category: Category,
    location: string,
    createdAt: Date,
    cloneOf: Claim
  ) {
    this.id = id
    this.owner = owner
    this.tittle = tittle
    this.description = description
    this.category = category
    this.location = location
    this.createdAt = createdAt
    this.cloneOf = cloneOf
  }

  public static create (owner: Visitor, tittle: string, description: string, category: Category, location: string, createdAt: Date, cloneOf: Claim): Claim {
    const id = v4()
    const claim = new Claim(id, owner, tittle, description, category, location, createdAt, cloneOf)

    // Add record event for open/closed principle
    return claim
  }

  public getId (): string {
    return this.id
  }
}
