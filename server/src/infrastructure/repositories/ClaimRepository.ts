import { Claim } from '../../domain/entities/Claim'

class ClaimRepository {
  private claims : Claim[]

  constructor () {
    this.claims = []
  }

  public async save (claim : Claim) : Promise<void> {
    const saveClaim = this.claims.find(c => c.getId() === claim.getId())

    if (saveClaim) {
      this.claims.splice(this.claims.indexOf(saveClaim), 1)
    }
    this.claims.push(claim)
  };

  public async findOneById (id: string): Promise<Claim | null> {
    const claim = this.claims.find(c => c.getId() === id)

    return claim || null
  }
}

export default new ClaimRepository;
export {ClaimRepository};
