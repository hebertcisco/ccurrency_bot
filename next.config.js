require("dotenv").config();

module.exports = {
  env: {
    ER_TELEGRAM_API_KEY: process.env.ER_TELEGRAM_API_KEY,
    BASE_URL: process.env.BASE_URL,
  },
};
