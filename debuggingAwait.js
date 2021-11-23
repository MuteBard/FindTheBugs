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

exports.getCatName = getCatName;