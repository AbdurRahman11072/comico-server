import dotenv from "dotenv";
dotenv.config();

export default {
    port: process.env.port,
    db_url: process.env.db_url,
}