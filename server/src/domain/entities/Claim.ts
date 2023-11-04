import {Visitor} from './Visitor'
import {Category} from './Category'
import {v4} from 'uuid'

// import { Nullable } from '../valueObjects/Nullable'

export class Claim {
  private id: string
  private owner: Visitor
  private title: string
  private description: string
  private category: Category
  private location: string
  private createdAt: Date
  // eslint-disable-next-line no-use-before-define
  private cloneOf?: Claim
  private likes: string[] = []

  private constructor(
    id: string,
    owner: Visitor,
    tittle: string,
    description: string,
    category: Category,
    location: string,
    createdAt: Date,
  ) {
    this.id = id
    this.owner = owner
    this.title = tittle
    this.description = description
    this.category = category
    this.location = location
    this.createdAt = createdAt
  }

  public static create(
    owner: Visitor,
    title: string,
    description: string,
    category: Category,
    location: string,
  ): Claim {
    const id = v4()
    const claim = new Claim(id, owner, title, description, category, location, new Date())

    // Add record event for open/closed principle
    return claim
  }

  public getId(): string {
    return this.id
  }

  addLike(id: string) {
    if (this.hasVisitorLiked(id)) {
      throw new Error('Visitor has already liked this claim.')
    }

    this.likes.push(id)
  }

  public hasVisitorLiked(id: string) {
    return this.likes.includes(id);
  }

  public getOwner(): Visitor {
    return this.owner;
  }

  public getTitle(): string {
    return this.title;
  }

  public getDescripcion(): string {
    return this.description;
  }

  public getCategory(): Category {
    return this.category;
  }

  public getLocation(): string {
    return this.location;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public getCloneOf(): Claim | undefined {
    return this.cloneOf;
  }
}
