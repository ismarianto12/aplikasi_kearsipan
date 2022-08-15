import { Sequelize } from "sequelize";
 
const db = new Sequelize('arsip_surat', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;