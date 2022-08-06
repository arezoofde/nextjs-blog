import React from 'react'
import Style from '../Collection/Collection.module.css'

export default function Collection() {
  return (
    <div>
        <div style={{ width: "90%", marginBlock: "5%" }} >
                <h1>all collection</h1>
                <div className={Style.all_collection}>

                    <div className={Style.items_one}>
                        <img style={{ width: "100%", height: "100%" }} src="../pic/ab.jpg" alt='item' />
                    </div>
                    <div className={Style.items_two}>
                        <img style={{ width: "100%", height: "177px" }} src="../pic/WallArt.jpg" alt='item' />
                    </div>
                    <div className={Style.items_three}>
                        <img style={{ width: "100%", height: "177px" }} src="../pic/images.jpg" alt='item' />
                    </div>
                </div>
            </div>
    </div>
  )
}
