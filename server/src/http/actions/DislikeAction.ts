import { Request, Response } from 'express'
import DislikeCommand from '../../application/commands/DislikeCommand'
import DislikeHandler from '../../application/handlers/DislikeHandler'

class DislikeAction {
  public async run (req: Request, res: Response) {
    const { id, ip, nickName } = req.body

    try {
      const command = new DislikeCommand(
        id,
        ip,
        nickName
      )
      const likeHandler = new DislikeHandler(command)
      await likeHandler.handleDislike()
      return res.status(201).json(
        { message: 'Dislike registered successfully' }
      )
    } catch (error : any) {
      return res.status(400).json(
        { message: error.message }
      )
    }
  }
}

export default new DislikeAction()
