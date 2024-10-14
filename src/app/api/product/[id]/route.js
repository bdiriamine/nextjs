import { MongoClient, ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';


const uri = process.env.MONGODB_URI;
const clientPromise = new MongoClient(uri).connect();

export async function PUT(req) {
    try {
        const id =req.url.split('/').pop()
      const client = await clientPromise;
      const db = client.db('nextdb');
  
      const body = await req.json();
        
      const result = await db.collection('products').findOneAndUpdate({_id: new ObjectId(id)},{ $set : body});
      return NextResponse.json({ msg: 'product update ' },{status:201});
      
    } catch (error) {
       return NextResponse.json({ error: error.message });
    }
  }
  export async function GET(req) {
    try {
        const id =req.url.split('/').pop()
      const client = await clientPromise;
      const db = client.db('nextdb');
      const products = await db.collection('products').findOne({_id: new ObjectId(id)});
      return NextResponse.json({ products },{status:202});
      
    } catch (error) {
       return NextResponse.json({ error: error.message });
    }
  }