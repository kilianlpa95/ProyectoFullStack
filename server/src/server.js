const app = require('./app');

async function main(){
    await app.listen(40000);
    console.log("Running port 40000");
}

main();