import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

function error() {
    const router = useRouter();
    useEffect(()=>{
        router.push("/");
    },[])
  return (
    <></>
  )
}

export default error