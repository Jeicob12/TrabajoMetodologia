import visitorRepository, { VisitorRepository } from 'infrastructure/repositories/VisitorRepository'
import CreateVisitorCommand from 'application/commands/CreateVisitorCommand'
import { Visitor } from 'domain/entities/Visitor'

class CreateVisitorHandler {
  private visitorRepository: VisitorRepository

  public constructor (
    visitorRepository: VisitorRepository

  ) {
    this.visitorRepository = visitorRepository
  }

  public async execute (command: CreateVisitorCommand): Promise<void> {
    const visitor = Visitor.create(
      command.getIp(),
      command.getNickName(),
      command.getPin()

    )

    await this.visitorRepository.save(visitor)
  }
}
export default new CreateVisitorHandler(visitorRepository)
