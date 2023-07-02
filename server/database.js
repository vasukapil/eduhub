const mongoose = require("mongoose");
const db_link =
  "mongodb+srv://vasukapil:AIhXIe1AGlOMHoer@cluster0.wny1hjt.mongodb.net/"

const databaseConnect = (function () {
  mongoose
    .connect(db_link)
    .then(() => {
      console.log("database connection established");
    })
    .catch(function (err) {
      console.log(err);
    });
})();

module.exports = databaseConnect;

