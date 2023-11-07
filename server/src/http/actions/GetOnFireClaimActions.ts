import { Request, Response } from 'express'
import ClaimRepository from '../../infrastructure/repositories/ClaimRepository'

class GetOnFireClaimsAction {
  public async run (_req: Request, res: Response) {
    try {
      // Obtener las 5 principales reclamaciones "on fire" desde el repositorio
      const onFireClaims = await ClaimRepository.getTopOnFireClaims()
      res.status(200).json({ onFireClaims })
    } catch (error : any) {
      res.status(400).json({ message: error.message })
    }
  }
}

export default new GetOnFireClaimsAction()
