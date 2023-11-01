import { v4 } from 'uuid'
// import { Nullable } from '../valueObjects/Nullable'

export class Visitor {
  private readonly id: string
  private ip: string
  private nickName: string
  private pin : string

  private constructor (
    id: string,
    ip: string,
    nickName: string,
    pin: string
  ) {
    this.id = id
    this.ip = ip
    this.nickName = nickName
    this.pin = pin
  }

  public static create (ip: string, nickName: string, pin : string): Visitor {
    const id = v4()
    const visitor = new Visitor(id, ip, nickName, pin)

    // Add record event for open/closed principle
    return visitor
  }

  public getId (): string {
    return this.id
  }

  public pinMatch (pin : string): boolean {
    return pin === this.pin
  }

  public getIp (): string {
    return this.ip
  }

  public getNickName (): string {
    return this.nickName
  }
}
