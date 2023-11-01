class CreateVisitorCommand {
  private readonly id: string
  private readonly ip: string
  private readonly nickName: string
  private readonly pin: string
  public constructor (
    id: string,
    ip: string,
    nickName: string,
    pin : string
  ) {
    this.id = id
    this.ip = ip
    this.nickName = nickName
    this.pin = pin
  }

  public getId (): string {
    return this.id
  }

  public getIp (): string {
    return this.ip
  }

  public getNickName (): string {
    return this.nickName
  }

  public getPin (): string {
    return this.pin
  }
}

export default CreateVisitorCommand
