import { Request, Response } from 'express'
import CreateClaimCommand from '../../../src/application/commands/CreateClaimCommand'
import CreateClaimHandler from '../../../src/application/handlers/CreateClaimHandler'

class CreateClaimAction {
  public async run (req: Request, res: Response) {
    const { id, owner, tittle, description, category, location, createdAt, cloneOf } = req.body

    try {
      const command = new CreateClaimCommand(
        id,
        owner,
        tittle,
        description,
        category,
        location,
        createdAt,
        cloneOf
      )
      await CreateClaimHandler.execute(command)
      return res.status(201).json(
        { message: 'Claim created successfully' }
      )
    } catch (error : any) {
      res.status(400).json(
        { message: error.message }
      )
    }
  }
}

export default new CreateClaimAction()
