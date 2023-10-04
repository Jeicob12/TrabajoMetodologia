import { Application } from 'express'
import CommonRoutes from './common.routes'
import CreateClaimAction from '../actions/CreateClaimAction'

class ClaimRoutes extends CommonRoutes {
  public constructor (app: Application) {
    super(app, 'Claim')
  }

  public setUpRoutes (): Application {
    this.app.post('/claim', CreateClaimAction.run)

    return this.app
  }
}
export default ClaimRoutes
