import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import errorimg from "../../public/images/Notfount/error.png"
import Button from './components/Button'
const NotFound= () => {
  return (
    <div className='w-full h-screen p-6 flex items-center flex-col'>
      <div>
        <Link href="/"> 
        <Button text="◄ Go Home"/>
        </Link>
      </div>
      <div>
        <Image src={errorimg}
        alt='Not found page shoishob website'
        width={500}
        height={500}
        >


        </Image>
      </div>
    </div>
  )
}

export default NotFound
