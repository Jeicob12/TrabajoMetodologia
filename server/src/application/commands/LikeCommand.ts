class LikeCommand {
  private readonly id: string
  private readonly ip: string // Revisar
  private readonly nickName: string // Revisar
  public constructor (
    id: string,
    ip: string, // Revisar
    nickName: string /// /Revisar

  ) {
    this.id = id
    this.ip = ip // Revisar
    this.nickName = nickName // Revisar
  }

  public getId (): string {
    return this.id
  }

  public getIp (): string { // Revisar
    return this.ip
  }

  public getNickName (): string { // Revisar
    return this.nickName
  }
}

export default LikeCommand
