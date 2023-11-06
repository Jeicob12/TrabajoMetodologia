import DislikeCommand from 'application/commands/DislikeCommand'

class DislikeHandler {
  private dislikeCommand: DislikeCommand

  constructor (dislikeCommand: DislikeCommand) {
    this.dislikeCommand = dislikeCommand
  }

  public handleDislike (): void {
    const id = this.dislikeCommand.getId()
    const ip = this.dislikeCommand.getIp()
    const nickName = this.dislikeCommand.getNickName()

    console.log(`Procesando dislike para ID: ${id}, IP: ${ip}, Nickname: ${nickName}`)

    // Dar el "dislike"

    this.dislikeCommand.dislike()
  }

  public getDislikesCount (): number {
    return this.dislikeCommand.getDislikesCount()
  }
}

export default DislikeHandler
