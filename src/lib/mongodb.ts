import { MongoClient, Db } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI || '';

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
    if (!MONGODB_URI) {
        throw new Error(
            'MONGODB_URI is not defined. Set it in your environment variables.'
        );
    }

    if (cachedClient && cachedDb) {
        return { client: cachedClient, db: cachedDb };
    }

    const client = new MongoClient(MONGODB_URI);
    await client.connect();

    const db = client.db('vexon');

    cachedClient = client;
    cachedDb = db;

    return { client, db };
}
