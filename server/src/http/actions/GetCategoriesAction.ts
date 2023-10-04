import { Request, Response } from 'express'
import GetCategoriesHandler from '../../application/handlers/GetCategoriesHandler'
import GetCategoriesCommand from '../../application/commands/GetCategoriesCommand'

class GetCategoriesAction {
  public async run (req: Request, res: Response) {
    const { id, name, color } = req.body
    try {
      const command = new GetCategoriesCommand(
        id,
        name,
        color
      )
      await GetCategoriesHandler.execute(command)
      return res.status(201).json(
        { message: 'Categories get successfully' }
      )
    } catch (error) {
      res.status(400).json(
        { message: error.message }
      )
    }
  }
}
export default new GetCategoriesAction()
