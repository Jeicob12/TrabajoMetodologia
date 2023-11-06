import { Visitor } from '../../domain/entities/Visitor'
import VisitorRepository from '../repositories/VisitorRepository'
class VisitorSeeder {
  private visitors: Array<Visitor> = []

  public constructor () {
    this.visitors.push(Visitor.create('120.50.29.0', 'Pedrito', '123'))
    this.visitors.push(Visitor.create('120.50.29.1', 'JuanJose', '1234'))
    this.visitors.push(Visitor.create('120.50.29.2', 'Roberto999', '12345'))
    this.visitors.push(Visitor.create('120.50.29.3', '_Melody', '123456'))
    this.visitors.push(Visitor.create('120.50.29.4', 'Licha', '1234567'))
  }

  // ¿Posible error? Dejo correción abajo comentada.
  public async generate (): Promise<void> {
    for (const category of this.visitors) {
      await VisitorRepository.save(category)
    }
  }

  // public async generate (): Promise<void> {
  //   for (const visitor of this.visitors) {
  //     await VisitorRepository.save(visitor)
  //   }
  // }
}

export default new VisitorSeeder()
