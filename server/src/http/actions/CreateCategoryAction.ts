import { Request, Response } from 'express'
import CreateCategoryCommand from '../../application/commands/CreateCategoryCommand'
import CreateCategoryHandler from '../../application/handlers/CreateCategoryHandler'

class CreateCategoryAction {
  public async run (_req: Request, res: Response) {
    const { name,color } = _req.body

    try {
      const command = new CreateCategoryCommand(
        name,
        color,

      )
      await CreateCategoryHandler.execute(command)
      return res.status(201).json(
        { message: 'Category created successfully' }
      )
    } catch (error : any) {
      return res.status(400).json(
        { message: error.message }
      )
    }
  }
}

export default new CreateCategoryAction()