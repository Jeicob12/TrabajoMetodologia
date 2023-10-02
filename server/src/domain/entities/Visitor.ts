import { v4 } from 'uuid'
// import { Nullable } from '../valueObjects/Nullable'

export class Visitor {
  private readonly id: string
  private ip: string
  private nickName: string

  private constructor (
    id: string,
    ip: string,
    nickName: string
  ) {
    this.id = id
    this.ip = ip
    this.nickName = nickName
  }

  public static create (ip: string, nickName: string): Visitor {
    const id = v4()
    const visitor = new Visitor(id, ip, nickName)

    // Add record event for open/closed principle
    return visitor
  }

  public getId (): string {
    return this.id
  }
}
