import type { Database } from "./types";
import { Pool } from "pg";
import { Kysely, PostgresDialect } from "kysely";

import dotenv from "dotenv";

dotenv.config();

const host = process.env.POSTGRES_HOST;
const port = Number(process.env.POSTGRES_PORT) || 5234;
const user = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD;
const database = process.env.POSTGRES_DATABASE;

const dialect = new PostgresDialect({
    pool: new Pool({
        host,
        port,
        user,
        password,
        database,
        idleTimeoutMillis: 30000,
    }),
});

export const db = new Kysely<Database>({
    dialect,
})
