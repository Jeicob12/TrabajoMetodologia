import DislikeCommand from 'application/commands/DislikeCommand'; 

class DislikeHandler {
  private dislikeCommand: DislikeCommand;

  constructor(dislikeCommand: DislikeCommand) {
    this.dislikeCommand = dislikeCommand;
  }

  public execute(): void {
    const id = this.dislikeCommand.getId();
    const ip = this.dislikeCommand.getIp();
    const nickName = this.dislikeCommand.getNickName();

    
    
    console.log(`Procesando dislike para ID: ${id}, IP: ${ip}, Nickname: ${nickName}`);

    // Dar el "dislike"
    
    this.dislikeCommand.dislike();
  }

  public getDislikesCount(): number {
    return this.dislikeCommand.getDislikesCount();
  }
}

// Crear una instancia de DislikeCommand y DislikeHandler
const dislikeCommand = new DislikeCommand('someID', '192.168.0.1', 'someNickname');
const dislikeHandler = new DislikeHandler(dislikeCommand);

export default dislikeHandler;
