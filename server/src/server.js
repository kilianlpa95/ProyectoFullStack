const app = require('./app');
import '@babel/polyfill';
const bcrypt = require('bcrypt');

async function main(){
    await app.listen(40000);
    console.log("Running port 40000");

    /*
    const hash = "$2b$10$kXnTvgbQq4aKr2LRgY01E.eqcjw8u41kEI1adqyPzi3fXP9rVXRz6";
    
    bcrypt.compare("pso", hash, function(err, res){
        if(res){
            console.log("true");
        } else {
            console.log("false");
        }
    });
    */
   
}

main();