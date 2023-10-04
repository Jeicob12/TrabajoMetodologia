import { Visitor } from '../../domain/entities/Visitor'
import VisitorRepository from '../repositories/VisitorRepository'
class VisitorSeeder {
  private visitors: Array<Visitor> = []

  public constructor () {
    this.visitors.push(Visitor.create('120.50.29.0', 'Pedrito'))
    this.visitors.push(Visitor.create('120.50.29.1', 'JuanJose'))
    this.visitors.push(Visitor.create('120.50.29.2', 'Roberto999'))
    this.visitors.push(Visitor.create('120.50.29.3', '_Melody'))
    this.visitors.push(Visitor.create('120.50.29.4', 'Licha'))
  }

  public async generate (): Promise<void> {
    for (const category of this.visitors) {
      await VisitorRepository.save(category)
    }
  }
}

export default new VisitorSeeder()
