import { Category } from "../../domain/entities/Category";
import CreateCategoryCommand from '../../application/commands/CreateCategoryCommand'
import  CategoryRepository  from "../../infrastructure/repositories/CategoryRepository";


class CreateCategoryHandler{
    
    public async execute (command : CreateCategoryCommand) : Promise<void>{

        

        const category = Category.create(command.getName() , command.getColor() )
        await CategoryRepository.save(category)
        

    }


}
export default  new CreateCategoryHandler()