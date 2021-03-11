const qGetAllState = () =>{
    return "select * from state_master";
}

const qGetStateById = () =>{
    return "select * from state_master where stateId = ? ";
}

const qAddState = ()=>{
    return "insert into state_master (stateId, stateName) values (?, ?)";
};

const qUpdateState = () =>{
    return "update state_master set stateName = ? where stateId = ?";
}

const qDeleteState = () =>{
    return "delete from state_master where stateId = ?";
}

module.exports = {
    qGetAllState,
    qGetStateById,
    qAddState,
    qUpdateState,
    qDeleteState
};