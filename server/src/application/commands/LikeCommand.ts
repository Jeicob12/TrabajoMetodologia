class LikeCommand {
  private readonly id: string
  private readonly ip: string
  private readonly nickName: string
  private likes: number // Nuevo: contador de likes

  public constructor (
    id: string,
    ip: string,
    nickName: string
  ) {
    this.id = id
    this.ip = ip
    this.nickName = nickName
    this.likes = 0 // Inicializamos el contador de likes en 0
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

  public like (): void { 
    this.likes++
  }

  public getLikesCount (): number { 
    return this.likes
  }
}

export default LikeCommand
