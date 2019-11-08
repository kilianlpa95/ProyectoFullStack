const app = require('./app');
import '@babel/polyfill';
//const bcrypt = require('bcrypt');

async function main(){
    await app.listen(40000);
    console.log("Running port 40000");

    /*
    const hash = "$2b$10$iMu8iHRzITQJ9dOZ4jjvtuEXeCxmMIgRQwfieW3fXNTrqGCB9WU.e";
    
    bcrypt.compare("psohrthr", hash, function(err, res){
        if(res){
            console.log("true");
        } else {
            console.log("false");
        }
    });
   */

}

main();