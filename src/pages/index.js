import React from 'react'
import *as style from "../styles/index.module.css"
import Link from 'next/link'

const Index = () => {
  return (
    <div>
      <h1 className={style.h1Text}>こんにちは</h1>
      <Link href="/contact">
        <a>contactページへ移動</a>
      </Link>
    </div>
  )
}

export default Index