import "reflect-metadata";
import { DataSource } from "typeorm";
import { Epf } from "../models/epfmodel";
import dotenv from "dotenv";
dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL, // 👈 direct render url
  synchronize: true,
  ssl: {
    rejectUnauthorized: false, // 👈 important for Render connection
  },
  entities: [Epf],
});
