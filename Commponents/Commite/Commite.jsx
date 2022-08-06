import React from 'react'

function Commite() {
    return (
        <div >
            <div className="comment">
                <h1>WellCome TO New Collection</h1>
                <p> Arezoo.FDE is a collection of modern</p>
                <p> handmade ceramic, inspired by the</p>
                <p>nature's uniqes shapes and tones</p>

            </div>
            <style jsx>
                {`
                .comment {
                  
                    height: 300px;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    justify-content: center;
                    text-align: justify;
                   
                  }
                  
                `}
            </style>
        </div>

    )

}

export default Commite