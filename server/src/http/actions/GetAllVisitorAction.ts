import { Request, Response } from 'express'
import  visitorRepository  from '../../infrastructure/repositories/VisitorRepository'
class GetAllVisitorAction {

  public async run (_req: Request, res: Response): Promise<void> {
    try {
      const visitors = await visitorRepository.findAll()
      res.status(200).json({visitors})
    } catch (error : any) {
      res.status(400).json({ message: error.message })
    }
  }
}

export default new GetAllVisitorAction()
