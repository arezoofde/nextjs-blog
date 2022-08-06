import React from 'react'
import Header from '../Header/Header'
import Style from './Banner.module.css'

function Banner() {
  return (
    <div className={Style.banner}>
    <Header />
    <div className={Style.collection}>
        <h1>(( New Collection ))</h1>
    </div>
</div>
  )
}

export default Banner