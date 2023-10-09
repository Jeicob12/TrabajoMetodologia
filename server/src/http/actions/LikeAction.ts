import { Request, Response } from 'express'
import LikeCommand from '../../../src/application/commands/LikeCommand'
import LikeHandler from '../../../src/application/handlers/LikeHandler'

class LikeAction {
  public async run (req: Request, res: Response) {
    const { id, ip, nickName } = req.body

    try {
      const command = new LikeCommand(
        id,
        ip,
        nickName
      )
      await LikeHandler.execute(command)
      return res.status(201).json(
        { message: 'Like registered successfully' }
      )
    } catch (error : any) {
      res.status(400).json(
        { message: error.message }
      )
    }
  }
}

export default new LikeAction()
