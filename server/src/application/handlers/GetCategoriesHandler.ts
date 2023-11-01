import categoryRepository, { CategoryRepository } from 'infrastructure/repositories/CategoryRepository'
import GetCategoriesCommand from 'application/commands/GetCategoriesCommand'
import { Category } from 'domain/entities/Category'

class GetCategoriesHandler {
  private categoryRepository: CategoryRepository

  public constructor (categoryRepository: CategoryRepository) {
    this.categoryRepository = categoryRepository
  }

  public async execute (command: GetCategoriesCommand): Promise<void> {
    const category = Category.create(
      command.getName(),
      command.getColor()
    )
    await this.categoryRepository.save(category)
  }
}

export default new GetCategoriesHandler(categoryRepository)
