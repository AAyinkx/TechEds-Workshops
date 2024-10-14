//My import
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

//Initialise epxress
const app = express();

//Tell express to use json
app.use(express.json());
//Tell express to use cors
app.use(cors());

//Configure dotenv file
dotenv.config();

//Set up our database using the connection string and
const dbConnectiontring = process.env.DATABASE_URL;
const db = new pg.Pool({ connectionString: dbConnectiontring });

//Set up a PORT for our server to listen
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Ready and running 🏃in PORT ${PORT}`);
});

app.get("/", (request, response) => {
  response.json({ message: "The root route" });
});

//Write a READ endpoint
//As a user, I want to see a list of the biscuits and descriptions
app.get("/biscuits", async (request, response) => {
  try {
    const biscuitsData = await db.query(
      `SELECT biscuit_name, description FROM biscuits;`
    );
    console.log(biscuitsData);
    response.json(biscuitsData.rows);
    response.status(200).json({ success: true });
  } catch (error) {
    console.error("This is a fatal error!", error);
    response.status(500).json({ success: false });
  }
});
//Write a CREATE endpoint
//Write an UPDATE endpoint
//Write a DELETE endpoint
