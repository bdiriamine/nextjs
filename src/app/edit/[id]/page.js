"use client"
import React, { useEffect, useState } from "react"
import styles from "../../page.module.css";
import { useParams } from "next/navigation";
import UserRoute from "@/app/components/privateRoute/userRoute";
export default function edit() {


    const [url,seturl] =useState()
    const [name,setname] =useState()
    const [price,setprice] =useState()
    const {id} = useParams()
    console.log(id)
useEffect(()=>{
    fetchdata()
},[])
const fetchdata =async()=>{
    let response = await  fetch(`http://localhost:3000/api/product/${id}`)
    let data = await response.json()
    console.log(data.products)
    seturl(data.products.url)
    setname(data.products.name)
    setprice(data.products.price)
}
    const  handleSubmit = async(e)=>{
        e.preventDefault();
        console.log('url :',url,'name :',name,'price:',price)
        try {
            const response = await fetch(`/api/product/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({'url':url,'name':name,'price':price}),
            });
    
            if (!response.ok) {
                throw new Error('Failed to update product');
            }
    
            const result = await response.json();
            console.log('Product updated:', result);
        } catch (error) {
            console.error('Error:', error);
        }
    }
  return (
    <UserRoute>
        <form onSubmit={handleSubmit} className={styles.formlg}>
        <label> name :  </label>
            <input type="text" className={styles.inputcolor} placeholder={name} onChange={(e)=>{setname(e.target.value)}} />
            <label> Price :  </label>
            <input type="number" className={styles.inputcolor} placeholder={price} onChange={(e)=>{setprice(e.target.value)}} />
            <label> url Image :  </label>
            <input type="text" className={styles.inputcolor}  placeholder={url} onChange={(e)=>{seturl(e.target.value)}} />
            <button className={styles.btnsend}> Send</button>
        </form>

        </UserRoute>
  )
}
