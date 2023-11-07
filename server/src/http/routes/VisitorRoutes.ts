import { Application } from 'express'
import CommonRoutes from './common.routes'
import CreateVisitorAction from '../actions/CreateVisitorAction'
import GetAllVisitorAction from '../actions/GetAllVisitorAction'

class VisitorRoutes extends CommonRoutes {
  public constructor (app: Application) {
    super(app, 'Visitor')
  }

  public setUpRoutes (): Application {
    this.app.post('/visitor', CreateVisitorAction.run)
    this.app.get('/visitor', GetAllVisitorAction.run)

    return this.app
  }
}
export default VisitorRoutes
