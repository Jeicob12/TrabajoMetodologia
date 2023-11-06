import { Request, Response } from 'express'
import ReportClaimCommand from 'application/commands/ReportClaimCommand'
import ReportClaimHandler from 'application/handlers/ReportClaimHandler'

class ReportClaimAction {
  public async run (req: Request, res: Response) {
    const { claimId, reason } = req.body

    try {
      const command = new ReportClaimCommand(claimId, reason)
      await ReportClaimHandler.execute(command)
      return res.status(200).json({ message: 'Claim reported successfully' })
    } catch (error: any) {
      res.status(400).json({ message: error.message })
    }
  }
}

export default new ReportClaimAction()
