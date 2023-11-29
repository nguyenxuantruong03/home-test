"use client"
import { useEffect, useState } from "react";
import './index.scss'

export const formatter = new Intl.NumberFormat("en-IN",{
    style: 'currency',
    currency: 'USD'
  })

  interface CurrencyProps{
    value?: string | number;
    valueold?: string | number;
  }

const Currency:React.FC<CurrencyProps> = ({value,valueold}) => {
    const[isMounted,setIsMounted] =useState(false)

    useEffect(()=>{
        setIsMounted(true);
    },[])

    if(!isMounted){
        return null
    }

    return ( 
        <div className="currency-screen currency-no-transform">
      {valueold !== undefined && (
        <span className="currency-old-value">
          {formatter.format(Number(valueold))}
        </span>
      )}
      {value !== undefined && (
        <span className="currency-value">{formatter.format(Number(value))}</span>
      )}
    </div>
     );
}

export default Currency;