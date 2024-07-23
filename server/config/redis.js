const Redis = require('ioredis');

const redis = new Redis({
    port: 14293,
    host: "redis-14293.c295.ap-southeast-1-1.ec2.redns.redis-cloud.com",
    username: "default",
    password: "QXVvmH6LJXgWKjM5oqZ8T4xtXkHOdxyl"
});

module.exports = redis