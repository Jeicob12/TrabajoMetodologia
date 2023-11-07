import { Request, Response } from 'express'
import  categoryRepository  from '../../infrastructure/repositories/CategoryRepository'
class GetCategoriesAction {

  public async run (_req: Request, res: Response): Promise<void> {
    try {
      const categories = await categoryRepository.getAll()
      res.status(200).json({ categories })
    } catch (error : any) {
      res.status(400).json({ message: error.message })
    }
  }
}

export default new GetCategoriesAction()

