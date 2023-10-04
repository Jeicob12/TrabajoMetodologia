import { Application } from 'express'
import CommonRoutes from './common.routes'
import GetCategoriesAction from '../actions/GetCategoriesAction'

class CategoryRoutes extends CommonRoutes {
  public constructor (app: Application) {
    super(app, 'Category')
  }

  public setUpRoutes (): Application {
    this.app.post('/categories', GetCategoriesAction.run)

    return this.app
  }
}
export default CategoryRoutes
