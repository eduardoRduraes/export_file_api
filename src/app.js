const path = require('path')
const list = require('./queue');
const lerCSV = require('./file');


const find = path.resolve(__dirname, 'files');

const pathList = async()=>{ 
    const filelist = await list(find);

    filelist.map(e =>{
        let validate = e.split('.').pop();
        if(validate==='csv'){
            lerCSV(e);
            console.log(e);
        }else{
            console.error('arquivo invalido!!');
        }
    });
}

pathList();