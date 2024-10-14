"use client";  // Add this line at the top

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Profile() {
    const router = useRouter();
    const removeCoookie =()=>{
        fetch('/api/clear-cookie', {
            method: 'POST',
          }).then(response => response.json()).then(data => {
            router.push("/")
          });
    }
//   useEffect(() => {
//     removeCoookie
//   }, []);
  return (
    <div>

   <div>
    <button onClick={removeCoookie} > remove coockie </button>
  </div>;

    </div>
  )
}
