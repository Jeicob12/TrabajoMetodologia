import { Visitor } from './Visitor'
import { Category } from './Category'
import { v4 } from 'uuid'

export class Claim {
  private id: string
  private owner: Visitor
  private tittle: string
  private description: string
  private category: Category
  private location: string
  private createdAt: Date
  // eslint-disable-next-line no-use-before-define
  private cloneOf: Claim | null
  private approvalCount: number // Nuevo - Contador de aprobaciones.
  private reports: { reason: string; timestamp: Date }[] // Nuevo para guardar los ReportClaim, revisar.

  private constructor (
    id: string,
    owner: Visitor,
    tittle: string,
    description: string,
    category: Category,
    location: string,
    createdAt: Date,
    cloneOf: Claim | null,
    approvalCount: number // Nuevo
  ) {
    this.id = id
    this.owner = owner
    this.tittle = tittle
    this.description = description
    this.category = category
    this.location = location
    this.createdAt = createdAt
    this.cloneOf = cloneOf
    this.approvalCount = approvalCount // Nuevo
    this.reports = [] // Nuevo para guardar los ReportClaim, revisar.
  }

  public static create (owner: Visitor, tittle: string, description: string, category: Category, location: string): Claim {
    const id = v4()
    const claim = new Claim(id, owner, tittle, description, category, location, new Date(), null, 0)

    return claim
  }

  public getId (): string {
    return this.id
  }

  public getOwner (): Visitor {
    return this.owner
  }

  public getTittle (): string {
    return this.tittle
  }

  public getDescription (): string {
    return this.description
  }

  public getCategory (): Category {
    return this.category
  }

  public getLocation (): string {
    return this.location
  }

  public getCreatedAt (): Date {
    return this.createdAt
  }

  public getcloneOf (): Claim | null {
    return this.cloneOf
  }

  public approve () {
    this.approvalCount++
  }

  public getApprovalCount (): number {
    return this.approvalCount
  }

  public addReport (report: { reason: string; timestamp: Date }): void {
    this.reports.push(report)
  }
}
