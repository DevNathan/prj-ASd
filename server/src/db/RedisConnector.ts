import R from "ioredis";
import { config } from "dotenv";

config();

const HOST = process.env.REDIS_HOST;
const PORT = process.env.REDIS_PORT;

if (!HOST || !PORT) {
  throw new Error("environment variable doesn't exist. please check out");
}

const registrationDB = new R({
  host: HOST,
  port: Number(PORT),
  db: 0,
});

const Redis = {
  registrationDB,
};

export default Redis;
