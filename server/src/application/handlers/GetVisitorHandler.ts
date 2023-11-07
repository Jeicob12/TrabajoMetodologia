import visitorRepository from '../../infrastructure/repositories/VisitorRepository'

class GetVisitorHandler {
  public async execute () {

   return await visitorRepository.findAll()
  }
}

export default new GetVisitorHandler()
