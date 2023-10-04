class CreateVisitorCommand {
  private readonly id: string
  private readonly ip: string
  private readonly nickName: string

  public constructor (
    id: string,
    ip: string,
    nickName: string
  ) {
    this.id = id
    this.ip = ip
    this.nickName = nickName
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
}

export default CreateVisitorCommand
