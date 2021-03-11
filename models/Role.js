class Role {
    constructor({
    roleId="",
    roleName="",
    createdAt="",
    updatedAt=""
    }){
        this.roleId = roleId,
        this.roleName = roleName,
        this.createdAt = createdAt,
        this.updatedAt = updatedAt   
    }
    
}

module.exports = Role;