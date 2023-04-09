import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';
/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentiatlly
 * during API Route usage.
 * https://github.com/vercel/next.js/pull/17666
 */
export let cached = global.mongo;

 const mongoClient = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxIdleTimeMS: 10000,
  serverSelectionTimeoutMS: 10000,
  socketTimeoutMS: 20000,
});


if(!cached) {
  cached = global.mongo = { conn: null, promise: null }
}

let indexesCreated = false;
async function createIndexes(db) {
  await Promise.all([
    db
      .collection('tokens')
      .createIndex({ expireAt: -1 }, { expireAfterSeconds: 0 }),
    db
      .collection('posts')
      .createIndexes([{ key: { createdAt: -1 } }, { key: { creatorId: -1 } }]),
    db
      .collection('comments')
      .createIndexes([{ key: { createdAt: -1 } }, { key: { postId: -1 } }]),
    db.collection('users').createIndexes([
      { key: { email: 1 }, unique: true },
      { key: { username: 1 }, unique: true },
    ]),
    db
      .collection('classes')
      .createIndexes([
        { key: { classCode: -1 }, unique: true },
        { key: { teacherId: -1 } },
      ]),
  ]);
  indexesCreated = true;
}

export async function getMongoClient() {

  if (!cached.promise) {
    console.log("connecting at getMongoClient");
    cached.promise = mongoClient.connect().then((client) => {
      return {
        client,
        db: client.db('Midvale'),
      }
    })
  }

  cached.conn = await cached.promise;
  return cached.conn.client;
}

export async function database(req, res, next) {

  if(!cached.promise) {
    console.log("connecting at database");
    cached.promise = mongoClient.connect().then((client) => {
      return {
        client,
        db: client.db('Midvale'),
      }
    })
    cached.conn = await cached.promise;
  }

  req.dbClient = cached.conn.client;
  req.db = cached.conn.db;
  return next();

}

const middleware = nextConnect();
middleware.use(database);
export default middleware;