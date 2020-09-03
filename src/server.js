const app = require('./app');

const port = 3330;
const portsys = process.env.PORT;

console.log("SYSTEM PORT: "+portsys);
console.log("Server PORT: "+port);
app.listen(portsys || port);
