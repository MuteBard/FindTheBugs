//There are two bugs in this file


function FakeDataBase(id) {
    const JSON_DATA = require('./data.json');
    const data = JSON_DATA.filter((elem) => { return elem.id === id })
    return new Promise((resolve) => {
        setTimeout(resolve(data), 2000);
    });
}

async function getCatName(id){
   const dbResult = await FakeDataBase(id);
   return dbResult.name;
}

// =============================================================

// function FakeDataBase2(id, details) {
//     const JSON_DATA = require('./data.json');
//     const data = JSON_DATA.filter((elem) => { return elem.id === +id })[0];

//     const newData = { data, details }

//     return new Promise((resolve) => {
//         setTimeout(resolve(newData), 2000);
//     });
// }

// function updateCatDetails(id, details){
//     const dbResult = await FakeDataBase2(id, details);
//     return dbResult;
// }

// =============================================================

function FakeDataBase3(id, details) {
    const JSON_DATA = require('./data.json');
    const data = JSON_DATA.map((elem) => { 
        return elem.id === +id 
    })[0];

    console.log(data)
    console.log(details)

    const newData = { ...data, ...details }

    return new Promise((resolve) => {
        setTimeout(resolve(newData), 2000);
    });
}

async function updateCatDetails2(id, details){
    const dbResult = await FakeDataBase3(details, id);
    return dbResult;
}

exports.getCatName = getCatName;
exports.updateCatDetails2 = updateCatDetails2;