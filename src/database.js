import { config } from "./config";
import { Pool } from 'pg';

export const connect = new Pool(config);