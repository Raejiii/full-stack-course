'use client'
import {useEffect} from 'react'
import Link from "next/link";
export default function Error(props: {error: Error, reset: () => void}) {
    const {error, reset} = props
    useEffect(() => {
        console.log(error)
    }, [error])
  return (
  <></>
  );
}