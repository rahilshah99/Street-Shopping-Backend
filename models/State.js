class State {
    constructor({
    stateId="",
    stateName="",
    createdAt="",
    updatedAt=""
    }){
        this.stateId = stateId,
        this.stateName = stateName,
        this.createdAt = createdAt,
        this.updatedAt = updatedAt   
    }
    
}

module.exports = State;