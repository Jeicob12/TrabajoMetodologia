class LikeCommand {
  public constructor(
    private ownerId: string,
    private pin: string,
    private claimId: string,
  ) {
  }

  public getClaim(): string {
    return this.claimId;
  }

  public getPin(): string {
    return this.pin
  }

  public getOwner(): string {
    return this.ownerId;
  }
}

export default LikeCommand
