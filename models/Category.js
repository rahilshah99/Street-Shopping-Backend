class Category {
    constructor({
    categoryId="",
    categoryName="",
    categoryType="",
    createdAt="",
    updatedAt=""
    }){
        this.categoryId = categoryId,
        this.categoryName = categoryName,
        this.categoryType = categoryType,
        this.createdAt = createdAt,
        this.updatedAt = updatedAt   
    }
    
}

module.exports = Category;