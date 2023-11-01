import { Request, Response } from 'express'
import { CategoryRepository } from 'infrastructure/repositories/CategoryRepository'
class GetCategoriesAction {
  private categoryRepository: CategoryRepository

  constructor (categoryRepository: CategoryRepository) {
    this.categoryRepository = categoryRepository
  }

  public async run (_req: Request, res: Response): Promise<void> {
    try {
      const categories = await this.categoryRepository.getAll()
      return res.status(200).json({ categories })
    } catch (error : any) {
      res.status(400).json({ message: error.message })
    }
  }
}

export default GetCategoriesAction
