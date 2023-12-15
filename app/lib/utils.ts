import mongoose from 'mongoose';

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return
    //if connection is already connected do not connect again. ⬇️
    const db = await mongoose.connect(process.env.MONGO_URL as string, {
      dbName: 'dashboard_Next_app',
    });
    connection.isConnected = db.connections[0].readyState;
    console.log('🟢 Connected to the database');
  } catch (error) {
    console.error('❌ Error connecting to the database:', error);
    throw new Error('❌ Error connecting to the database');
  }
};
