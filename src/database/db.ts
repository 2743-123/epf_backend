import "reflect-metadata";
import { DataSource } from "typeorm";
import { Epf } from "../models/epfmodel";
import dotenv from "dotenv";
dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  schema: "public",
  url: process.env.DATABASE_URL, // 👈 direct render url
  synchronize: true,
  logging: false,
  ssl: {
    rejectUnauthorized: false, // 👈 important for Render connection
  },
  entities: [Epf],
});
