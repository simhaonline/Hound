const { processColor } = require("react-native");

module.exports = {
    redisHost: processColor.env.REDIS_HOST,
    redisPort: processColor.env.REDIS_PORT,
    pgUser: process.env.PGUSER,
    pgHost: process.env.PGHOST,
    pgDatabase: process.env.PGDATABASE,
    pgPassword: process.env.PGPASSWORD,
    pgPort:process.env.PGPORT
}