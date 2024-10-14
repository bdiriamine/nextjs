"use client"
import { Form } from "@/styles/styleLogin"
import React, { useState } from "react"
import styles from "../../page.module.css";
import UserRoute from "../privateRoute/userRoute";


export default function AddProduct() {
    const [url,seturl] =useState()
    const [name,setname] =useState()
    const [price,setprice] =useState()
    const  handleSubmit = async(e)=>{
        e.preventDefault();
        console.log('url :',url,'name :',name)
        try {
            const response = await fetch('http://localhost:3000/api/product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({'url':url,'name':name,'price':price}),
            });

            if (!response.ok) {
                throw new Error('Failed to add product');
            }

            const result = await response.json();
            console.log('Product added:', result);
            alert('Product added successfully');
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to add product');
        }
    }
  return (
    <div>

     <UserRoute>
        <form onSubmit={handleSubmit} className={styles.formlg}>
        <label> name :  </label>
            <input type="text" className={styles.inputcolor} onChange={(e)=>{setname(e.target.value)}} />
            <label> Price :  </label>
            <input type="number" className={styles.inputcolor} onChange={(e)=>{setprice(e.target.value)}} />
            <label> url Image :  </label>
            <input type="file" className={styles.inputcolor} onChange={(e)=>{seturl(e.target.value)}} />
            <button className={styles.btnsend}> Send</button>
        </form>
    </UserRoute>

    </div>
  )
}
