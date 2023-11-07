import { Request, Response } from 'express'
import CreateVisitorCommand from '../../application/commands/CreateVisitorCommand'
import CreateVisitorHandler from '../../application/handlers/CreateVisitorHandler'

class CreateVisitorAction{
  public async run (req: Request, res: Response) {
    const { id, ip, nickName, pin } = req.body

    try {
      const command = new CreateVisitorCommand(
        id,
        ip,
        nickName,
        pin
      )
      await CreateVisitorHandler.execute(command)
      return res.status(201).json(
        { message: 'Visitor created successfully' }
      )
    } catch (error : any) {
      return res.status(400).json(
        { message: error.message }
      )
    }
  }
}

export default new CreateVisitorAction()
