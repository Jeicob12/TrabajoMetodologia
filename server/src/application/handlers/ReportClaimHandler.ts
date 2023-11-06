import ReportClaimCommand from 'application/commands/ReportClaimCommand'
import ClaimRepository from 'infrastructure/repositories/ClaimRepository'

class ReportClaimHandler {
  public async execute (command: ReportClaimCommand): Promise<void> {
    const claim = await ClaimRepository.findOneById(command.getClaimId())

    if (!claim) {
      throw new Error('Claim not found')
    }
    const newReport = {
      reason: command.getReason(),
      timestamp: claim.getCreatedAt()
    }

    claim.addReport(newReport)

    await ClaimRepository.save(claim)
  }
}

export default new ReportClaimHandler()
