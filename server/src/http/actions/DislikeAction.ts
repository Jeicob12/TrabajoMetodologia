import { Request, Response } from 'express'
import DislikeCommand from '../../../src/application/commands/DislikeCommand'
import DislikeHandler from '../../../src/application/handlers/DislikeHandler'

class LikeAction {
  public async run (req: Request, res: Response) {
    const { id, ip, nickName } = req.body

    try {
      const command = new DislikeCommand(
        id,
        ip,
        nickName
      )
      await DislikeHandler.execute(command)
      return res.status(201).json(
        { message: 'Dislike registered successfully' }
      )
    } catch (error) {
      res.status(400).json(
        { message: error.message }
      )
    }
  }
}

export default new LikeAction()
