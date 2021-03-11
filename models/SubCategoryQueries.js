const qGetAllSubCategory = () =>{
    return "select * from sub_category_master";
}

const qGetSubCategoryById = () =>{
    return "select * from sub_category_master where subCategoryId = ? ";
}

const qAddSubCategory = ()=>{
    return "insert into sub_category_master (subCategoryId, subCategoryName, categoryId) values (?, ?, ?)";
};

const qUpdateSubCategory = () =>{
    return "update sub_category_master set subCategoryName = ?, categoryId = ? where subCategoryId = ?";
}

const qDeleteSubCategory = () =>{
    return "delete from sub_category_master where subCategoryId = ?";
}

module.exports = {
    qGetAllSubCategory,
    qGetSubCategoryById,
    qAddSubCategory,
    qUpdateSubCategory,
    qDeleteSubCategory
};