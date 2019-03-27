import oracledb from "oracledb";
import heroes from "../config/database.mjs";

export async function initialize() {
  console.log("Connecting to Oracle database");
  const pool = await oracledb.createPool(heroes);
  console.log("Oracle connected!");
}
export async function close() {
  await oracledb.getPool().close();
}
