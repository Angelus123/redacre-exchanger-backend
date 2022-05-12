import dotenv from "dotenv";

dotenv.config()

const config = {
    development: {
        db_url: process.env.DATABASE_URL,
        port: process.env.PORT
    },
    test: {
        db_url: process.env.TEST_URL,
        port: process.env.PORT
    },
    production: {
        db_url: process.env.DEV_URL,
        port: process.env.PORT
    },

}
export default config