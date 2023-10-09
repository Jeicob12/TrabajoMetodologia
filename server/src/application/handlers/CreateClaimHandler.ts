
import { Claim } from 'domain/entities/Claim';

import CreateClaimCommand from '../../../src/application/commands/CreateClaimCommand'

import { ClaimRepository } from 'infrastructure/repositories/ClaimRepository';
import claimRepository from 'infrastructure/repositories/ClaimRepository';

import {VisitorRepository} from 'infrastructure/repositories/VisitorRepository';
import visitorRepository from 'infrastructure/repositories/VisitorRepository';

import categoryRepository from 'infrastructure/repositories/CategoryRepository';
import { CategoryRepository } from 'infrastructure/repositories/CategoryRepository';


class CreateClaimHandler {
  private claimRepository : ClaimRepository;
  private visitorRepository : VisitorRepository;
  private categoryRepository : CategoryRepository;

  public constructor( claimRepository: ClaimRepository, visitorRepository: VisitorRepository, categoryRepository: CategoryRepository)
  {
    this.claimRepository = claimRepository;
    this.visitorRepository = visitorRepository;
    this.categoryRepository = categoryRepository;
  }

  public async execute (command: CreateClaimCommand): Promise<void> {

    let visitor = await this.visitorRepository.findOneById(command.getOwnerId());

    if (!visitor)
    {
      throw new Error('visitor not found')
    }

    if(!visitor.pinMatch(command.getPin()))
    {
      throw new Error('the pin does not match')
    }

    let category = await this.categoryRepository.findOneById(command.getCategory());
    if (!category)
    {
      throw new Error('category not found')
    }
    let title = command.getTittle();
    let description = command.getDescription();
    let location = command.getLocation();
    let createdAt = command.getCreatedAt();
    let cloneOf = command.getCloneOf();

    let claim = Claim.create(visitor, title, description, category, location, createdAt, cloneOf);

    await this.claimRepository.save(claim);
  }
}

export default new CreateClaimHandler(claimRepository , visitorRepository , categoryRepository );
