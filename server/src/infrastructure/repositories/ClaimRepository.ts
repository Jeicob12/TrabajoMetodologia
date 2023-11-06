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

  public async getTopOnFireClaims (): Promise<Claim[]> {
    const now = new Date()
    now.setHours(now.getHours() - 1) // Obtener la fecha de hace una hora

    const onFireClaims = this.claims
      .filter((claim) => claim.getCreatedAt() >= now) // Filtrar por fecha de creación
      .sort((a, b) => b.getApprovalCount() - a.getApprovalCount()) // Ordenar por contador de aprobaciones
      .slice(0, 5) // Obtener las 5 principales reclamaciones "on fire"

    return onFireClaims
  }

  public async getTopLastClaims (): Promise<Claim[]> {
    // Obtener las últimas 5 reclamaciones ordenadas por fecha de creación descendente
    const lastClaims = this.claims
      .sort((a, b) => b.getCreatedAt().getTime() - a.getCreatedAt().getTime())
      .slice(0, 5)

    return lastClaims
  }
}

export default new ClaimRepository()
export { ClaimRepository }
