import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';
import bcrypt from "bcrypt";

const uri = process.env.MONGODB_URI;
const clientPromise = new MongoClient(uri).connect();

export async function POST(req) {
    try {
  
      const client = await clientPromise;
      const db = client.db('nextdb');
  
      const { email,password } = await req.json();
      const existeuser = await db.collection('users').findOne({ email: email})
      if(existeuser){
        return NextResponse.json({msg:'email already existe '} ,{status:400})
      }
        let passwordhashed = await bcrypt.hash(password,10) 
      const result = await db.collection('users').insertOne({ email,password:passwordhashed.toString() });
      return NextResponse.json(result ,{status:201});
      
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