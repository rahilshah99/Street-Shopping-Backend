const qGetAllRole = () =>{
    return "select * from role_master";
}

const qGetRoleById = () =>{
    return "select * from role_master where roleId = ?";
}

const qAddRole = ()=>{
    return "insert into role_master (roleName) values (?)";
};

const qUpdateRole = () =>{
    return "update role_master set roleName = ? where roleId = ?";
}

const qDeleteRole = () =>{
    return "delete from role_master where roleId = ?";
}

module.exports = {
    qGetAllRole,
    qGetRoleById,
    qAddRole,
    qUpdateRole,
    qDeleteRole
};