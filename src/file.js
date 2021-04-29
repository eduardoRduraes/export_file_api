//const connection = require('./database');
const api = require('axios');
const csv = require('fast-csv');
const fs = require('fs');
const Rural = require('./models/Rural');

function lerCSV(file){
    fs.createReadStream(file, { bufferSize: 64 * 1024 })
        .pipe(csv.parse({
            delimiter: ';',
            quote: '"',
            trim: true,
            'skipRows': 1
        }))
        .on('data', row =>{
            const data = new Rural(row);          

            if (!isNaN(data.cpftitular) && !isNaN(data.nb)) {
                //await connection('rural').insert(data);
                enviarData(data);               
            }
        })
        .on('error', err => console.error(err))
        .on('end', (rowCount) => console.log(`total de linhas ${rowCount}`));
}

const enviarData = async(data) =>{
     await api.post('http://apiconsultamais.online/api/edu/rural', data).then(res => {
        const response = res.data;
        console.log(response);
    }).catch(err => {
        console.log(err.message);
    });
}

module.exports = lerCSV;