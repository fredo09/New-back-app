const mongoose = require('mongoose');
const app = require('./app');

const { PORTDB, PORT, API_VERSION } = require("./config");


//mongoose.set("useFindAndModify", false);

//Conectando con contenedor mongo - Se cambia el localhost por mongo par apuntar al localhost del contenedor mongo
mongoose.connect(`mongodb://mongo_db:${PORTDB}/mernDB`, (err) => {
    if (err) throw err;
    app.listen(PORT, () => {
      console.log("######################");
      console.log("###### API REST  ######");
      console.log("######################");
      console.log(`Se ha levando el servidor en http://localhost:${PORT}/api/${API_VERSION}`);
    });
});