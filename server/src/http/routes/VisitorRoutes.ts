import { Application } from 'express'
import CommonRoutes from './common.routes'
import CreateVisitorAction from '../actions/CreateVisitorAction '

class VisitorRoutes extends CommonRoutes {
  public constructor (app: Application) {
    super(app, 'Visitor')
  }

  public setUpRoutes (): Application {
    this.app.post('/visitor', CreateVisitorAction.run)

    return this.app
  }
}
export default VisitorRoutes
