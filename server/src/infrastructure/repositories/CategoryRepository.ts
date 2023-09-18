import Category  from "../../domain/entities/Category";


class CategoryRepository{

    private categorys : Category[];

    public constructor() {
        this.categorys = [];
      }

      public async save (category : Category) : Promise<void>
      {
        const saveCategory = this.categorys.find(c => c.getId() === category.getId());

        if(saveCategory)
        {
          this.categorys.splice(this.categorys.indexOf(saveCategory),1);
        }
        this.categorys.push(category);
     };

     public async findOneById(id: string): Promise<Category | null> {
      const category = this.categorys.find(c => c.getId() === id);

      return category ? category : null;
     }

     public async getAll(): Promise<Category[] | null> {
      if (this.categorys.length === 0) {
        return null;
      }
      return this.categorys;

     };


}
