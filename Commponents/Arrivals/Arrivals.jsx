import React from 'react'

function Arrivals() {
    return (
        <>
            <div className="arrivals">
                <div>
                    <h2>new arrivals</h2>
                    <div className="img_arrivals">
                        <div>
                            <img style={{ width: "100%", height: "170px" }} src="../pic/aa.jpg" alt='item' />
                            <div className="info_arrivals">
                                <p>mirror</p>
                                <p>5$</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style jsx>
                {`
                .arrivals {
                    padding: 5px;
                    justify-content: space-around;
                    width: full;
                    height: 300px;
                    margin-block: 90px;
                  }
                  .img_arrivals {
                    width: 20%;
                    height: 200px;
                  }
                  .info_arrivals {
                    display: flex;
                    flex-direction: row;
                    height: 50px;
                    justify-content: space-between;
                    padding: 5px;
                  }
                `}
            </style>
        </>
    )
}

export default Arrivals