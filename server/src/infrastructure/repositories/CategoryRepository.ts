import Category  from "../../domain/entities/Category";


class CategoryRepository{

    private categories : Category[];

    public constructor() {
        this.categories = [];
      }

      public async save (categories : Category) : Promise<void>
      {
        const saveCategory = this.categories.find(c => c.getId() === categories.getId());

        if(saveCategory)
        {
          this.categories.splice(this.categories.indexOf(saveCategory),1);
        }
        this.categories.push(categories);
     };

     public async findOneById(id: string): Promise<Category | null> {
      const category = this.categories.find(c => c.getId() === id);

      return category ? category : null;
     }

     public async getAll(): Promise<Category[]> {
      return this.categories;

     };


}
