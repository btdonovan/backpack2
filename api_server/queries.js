const Pool = require("pg").Pool;

const pool = new Pool({
  user: "backpack",
  host: 'database',
  database: "backpack",
  password: "weather_password",
  port: 5432,
});

const listItems = (request, response) => {
  pool.query("SELECT * FROM item_list", (error, results) => {
    if (error) {
      console.log(error);
    }
    console.log(results)
    response.status(200).json(results.rows);
  });
};
// const getAll = (request, response) => {
//   pool.query("SELECT *", (error, results) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).json(results.rows);
//   });
// };
const createBackpack = (request, response) => {
  let { name, max_weigth} = request.body;
  pool.query(
    "INSERT INTO backpack(name, max_weight) VALUES($1, $2)",
    [name, max_weigth],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send("User Added");
    }
  );
};

module.exports = {
  listItems,
  createBackpack,
  // getAll
};
