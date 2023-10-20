export const JWT_SECRET = "3Xqw80AIlLMHBtYXpS+Mgg==";
export const TOKEN_MAX_AGE = 60 * 60 * 24 * 30; // 30 Days
export const CLIENT_BASE_URL =
  process.env.NODE_ENV == "development" ? "http://localhost:3000" : "";
export const API_BASE_URL =
  process.env.NODE_ENV == "development" ? "http://localhost:1337/api" : "";
