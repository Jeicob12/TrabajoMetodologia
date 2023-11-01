import LikeCommand from "application/commands/LikeCommand";


class LikeHandler {
    private likeCommand: LikeCommand;
  
    constructor(likeCommand: LikeCommand) {
      this.likeCommand = likeCommand;
    }
  
    public handleLike(): void {
      const id = this.likeCommand.getId();
      const ip = this.likeCommand.getIp();
      const nickName = this.likeCommand.getNickName();
  
      
      
      console.log(`Procesando like para ID: ${id}, IP: ${ip}, Nickname: ${nickName}`);
  
      // Dar el "me gusta"
      
      this.likeCommand.like();
    }
  
    public getLikesCount(): number {
      return this.likeCommand.getLikesCount();
    }
  }

export default new LikeHandler()
