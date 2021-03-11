class SubCategory {
    constructor({
    subCategoryId="",
    subCategoryName="",
    categoryId="",
    createdAt="",
    updatedAt=""
    }){
        this.subCategoryId = subCategoryId,
        this.subCategoryName = subCategoryName,
        this.categoryId = categoryId,
        this.createdAt = createdAt,
        this.updatedAt = updatedAt   
    }
    
}

module.exports = SubCategory;