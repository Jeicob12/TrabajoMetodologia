class DislikeCommand {
  private readonly id: string
  private readonly ip: string
  private readonly nickName: string
  private dislikes: number // Nuevo: contador de dislikes

  public constructor (
    id: string,
    ip: string,
    nickName: string
  ) {
    this.id = id
    this.ip = ip
    this.nickName = nickName
    this.dislikes = 0 // Inicializamos el contador de dislikes en 0
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

  public dislike (): void { // Nuevo: método para dar "dislike"
    this.dislikes++
  }

  public getDislikesCount (): number { // Nuevo: método para obtener la cantidad de dislikes
    return this.dislikes
  }
}

export default DislikeCommand
