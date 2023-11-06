import { Application } from 'express';
import CommonRoutes from './common.routes';
import GetCategoriesAction from '../actions/GetCategoriesAction';
import { CategoryRepository } from 'infrastructure/repositories/CategoryRepository';

class CategoryRoutes extends CommonRoutes {
  private categoryRepository: CategoryRepository;
  private getCategoriesAction: GetCategoriesAction;

  public constructor(app: Application, categoryRepository: CategoryRepository) {
    super(app, 'Category');
    this.categoryRepository = categoryRepository;
    this.getCategoriesAction = new GetCategoriesAction(this.categoryRepository);
  }

  public setUpRoutes(): Application {
    this.app.post('/categories', this.getCategoriesAction.run);
    return this.app;
  }
}

export default CategoryRoutes;
