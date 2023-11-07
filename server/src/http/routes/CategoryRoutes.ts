import { Application } from 'express';
import CommonRoutes from './common.routes';
import GetCategoriesAction from '../actions/GetCategoriesAction';
import CreateCategoryAction from '../actions/CreateCategoryAction';
class CategoryRoutes extends CommonRoutes {

  public constructor(app: Application) {
    super(app, 'Category');

  }

  public setUpRoutes(): Application {
    this.app.get('/categories', GetCategoriesAction.run);
    this.app.post('/categories',CreateCategoryAction.run);
    return this.app;
  }
}

export default CategoryRoutes;
