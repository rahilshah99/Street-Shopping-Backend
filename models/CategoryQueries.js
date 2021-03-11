const qGetAllCategory = () =>{
    return "select * from category_master";
}

const qGetCategoryById = () =>{
    return "select * from category_master where categoryId = ? ";
}

const qAddCategory = ()=>{
    return "insert into category_master (categoryId, categoryName, categoryType) values (?, ?, ?)";
};

const qUpdateCategory = () =>{
    return "update category_master set categoryName = ?, categoryType = ? where categoryId = ?";
}

const qDeleteCategory = () =>{
    return "delete from category_master where categoryId = ?";
}

module.exports = {
    qGetAllCategory,
    qGetCategoryById,
    qAddCategory,
    qUpdateCategory,
    qDeleteCategory
};