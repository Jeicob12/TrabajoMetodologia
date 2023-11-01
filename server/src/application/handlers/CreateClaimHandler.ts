import { Claim } from 'domain/entities/Claim'
import CreateClaimCommand from '../../../src/application/commands/CreateClaimCommand'
import claimRepository, { ClaimRepository } from 'infrastructure/repositories/ClaimRepository'
import visitorRepository, { VisitorRepository } from 'infrastructure/repositories/VisitorRepository'
import categoryRepository, { CategoryRepository } from 'infrastructure/repositories/CategoryRepository'

class CreateClaimHandler {
  private claimRepository : ClaimRepository
  private visitorRepository : VisitorRepository
  private categoryRepository : CategoryRepository

  public constructor (claimRepository: ClaimRepository, visitorRepository: VisitorRepository, categoryRepository: CategoryRepository) {
    this.claimRepository = claimRepository
    this.visitorRepository = visitorRepository
    this.categoryRepository = categoryRepository
  }

  public async execute (command: CreateClaimCommand): Promise<void> {
    const visitor = await this.visitorRepository.findOneById(command.getOwnerId())

    if (!visitor) {
      throw new Error('visitor not found')
    }

    if (!visitor.pinMatch(command.getPin())) {
      throw new Error('the pin does not match')
    }

    const category = await this.categoryRepository.findOneById(command.getCategoryId())
    if (!category) {
      throw new Error('category not found')
    }
    const claim = Claim.create(visitor, command.getTittle(), command.getDescription(), category, command.getLocation())

    await this.claimRepository.save(claim)
  }
}

export default new CreateClaimHandler(claimRepository, visitorRepository, categoryRepository)
