import { Category } from '../../domain/entities/Category'
import CategoryRepository from '../repositories/CategoryRepository'
class CategorySeeder {
  private categories: Array<Category> = []

  public constructor () {
    this.categories.push(Category.create('Categoría 1', 'Rojo'))
    this.categories.push(Category.create('Categoría 2', 'Blanco'))
    this.categories.push(Category.create('Categoría 3', 'Azul'))
    this.categories.push(Category.create('Categoría 4', 'Púrpura'))
    this.categories.push(Category.create('Categoría 5', 'Verde'))
  }

  public async generate (): Promise<void> {
    for (const category of this.categories) {
      await CategoryRepository.save(category)
    }
  }
}

export default new CategorySeeder()
