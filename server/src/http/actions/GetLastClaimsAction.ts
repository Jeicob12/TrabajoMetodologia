import { Request, Response } from 'express'
import ClaimRepository from 'infrastructure/repositories/ClaimRepository'

class GetLastClaimsAction {
  public async run (_req: Request, res: Response) {
    try {
      // Obtener las últimas 5 reclamaciones
      const lastClaims = await ClaimRepository.getTopLastClaims()

      res.status(200).json({ lastClaims })
    } catch (error : any) {
      res.status(400).json({ message: error.message })
    }
  }
}

export default new GetLastClaimsAction()
