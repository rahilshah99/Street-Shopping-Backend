class City {
    constructor({
    cityId="",
    cityName="",
    stateId="",
    createdAt="",
    updatedAt=""
    }){
        this.cityId = cityId,
        this.cityName = cityName,
        this.stateId = stateId,
        this.createdAt = createdAt,
        this.updatedAt = updatedAt   
    }
    
}

module.exports = City;