const app = require('./app');
import '@babel/polyfill';

async function main(){
    await app.listen(40000);
    console.log("Running port 40000");
}

main();