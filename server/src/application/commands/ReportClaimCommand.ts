class ReportClaimCommand {
  private readonly claimId: string
  private readonly reason: string

  public constructor (claimId: string, reason: string) {
    this.claimId = claimId
    this.reason = reason
  }

  public getClaimId (): string {
    return this.claimId
  }

  public getReason (): string {
    return this.reason
  }
}

export default ReportClaimCommand
