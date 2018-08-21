export default {
  database: `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}${process.env.DB_DOMAIN}:${
    process.env.DB_PORT
  }/${process.env.DB_NAME}`,
  baseUrl: 'http://localhost:1337/api',
}
