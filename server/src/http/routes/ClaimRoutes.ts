import { Application } from 'express'
import CommonRoutes from './common.routes'
import CreateClaimAction from '../actions/CreateClaimAction'
import GetOnFireClaimActions from 'http/actions/GetOnFireClaimActions'
import GetLastClaimsAction from 'http/actions/GetLastClaimsAction'
class ClaimRoutes extends CommonRoutes {
  public constructor (app: Application) {
    super(app, 'Claim')
  }

  public setUpRoutes (): Application {
    this.app.post('/claim', CreateClaimAction.run)
    this.app.get('/on-fire-claims', GetOnFireClaimActions.run)
    this.app.get('/last-claims', GetLastClaimsAction.run)
    return this.app
  }
}
export default ClaimRoutes
