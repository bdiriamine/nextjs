"use client"
import { Form } from "@/styles/styleLogin"
import React, { useState } from "react"
import styles from "../../page.module.css";
import { useRouter } from 'next/navigation';
export default function Login() {
    const [email,setEmail] =useState()
    const [password,setPassword] =useState()
    const router = useRouter();
    const  handleSubmit = async(e)=>{
      e.preventDefault();
      console.log('email :',email,'password :',password)
      try {
          const response = await fetch('http://localhost:3000/api/user/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({'email':email,'password':password,}),
          });

          if (!response.ok) {
              throw new Error('Failed to login ');
          }

          const result = await response.json();
           router.push('/');

      } catch (error) {
          console.error('Error:', error);
          alert('Failed to login');
      }
  }
  return (



    <div>
        <form onSubmit={handleSubmit} className={styles.formlg}>
        <label> Email :  </label>
            <input type="email" className={styles.inputcolor} onChange={(e)=>{setEmail(e.target.value)}} />
            <label> Password :  </label>
            <input type="paswword" className={styles.inputcolor} onChange={(e)=>{setPassword(e.target.value)}} />
            <button className={styles.btnsend}> Send</button>
        </form>
    </div>
  )
}

  

