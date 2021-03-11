const qGetAllCity = () =>{
    return "select * from city_master";
}

const qGetCityById = () =>{
    return "select * from city_master where cityId = ?";
}

const qAddCity = ()=>{
    return "insert into city_master (cityId, cityName, stateId) values (?, ?, ?)";
};

const qUpdateCity = () =>{
    return "update city_master set cityName = ?, stateId = ? where cityId = ?";
}

const qDeleteCity = () =>{
    return "delete from city_master where cityId = ?";
}

module.exports = {
    qGetAllCity,
    qGetCityById,
    qAddCity,
    qUpdateCity,
    qDeleteCity
};