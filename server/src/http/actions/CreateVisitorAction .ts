import { Request, Response } from 'express'
import CreateVisitorCommand from '../../../src/application/commands/CreateVisitorCommand'
import CreateVisitorHandler from '../../../src/application/handlers/CreateVisitorHandler'

class CreateVisitorAction {
  public async run (req: Request, res: Response) {
    const { id, ip, nickName } = req.body

    try {
      const command = new CreateVisitorCommand(
        id,
        ip,
        nickName
      )
      await CreateVisitorHandler.execute(command)
      return res.status(201).json(
        { message: 'Visitor created successfully' }
      )
    } catch (error : any) {
      res.status(400).json(
        { message: error.message }
      )
    }
  }
}

export default new CreateVisitorAction()
