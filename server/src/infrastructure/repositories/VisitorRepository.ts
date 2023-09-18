import { Visitor } from "../../domain/entities/Visitor"

class VisitorRepository{

    private visitors : Visitor[];

    constructor() {
        this.visitors = [];
      }

      public async save (visitors : Visitor) : Promise<void>
      {
        const saveCategory = this.visitors.find(c => c.getId() === visitors.getId());

        if(saveCategory)
        {
          this.visitors.splice(this.visitors.indexOf(saveCategory),1);
        }
        this.visitors.push(visitors);
     };

     public async findOneById(id: string): Promise<Visitor | null> {
      const visitor = this.visitors.find(c => c.getId() === id);

      return visitor ? visitor : null;
     }
}
