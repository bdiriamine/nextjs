import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';


const uri = process.env.MONGODB_URI;
const clientPromise = new MongoClient(uri).connect();

export async function POST(req) {
    try {
  
      const client = await clientPromise;
      const db = client.db('nextdb');
  
      const { name,price,url } = await req.json();
        
      const result = await db.collection('products').insertOne({ name,price,url });
      return NextResponse.json({ msg: 'product added ' },{status:201});
      
    } catch (error) {
       return NextResponse.json({ error: error.message });
    }
  }
  export async function GET(req) {
    try {
  
      const client = await clientPromise;
      const db = client.db('nextdb');
      const products = await db.collection('products').find().toArray();
      return NextResponse.json({ products },{status:202});
      
    } catch (error) {
       return NextResponse.json({ error: error.message });
    }
  }