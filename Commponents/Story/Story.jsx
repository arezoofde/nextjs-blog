import Image from 'next/image'

export default function Story() {
    return (
        <div style={{ width: "100%" }}>
            <div className="story">
                <img
                    
                    src="../pic/aa.jpg"
                    alt='item'
                    layout='fill' />
                <div className="item-story">
                    <p>what started as a hobby</p>
                    <p>and a way to pass time.</p>
                    <p>evolod into a real passion.</p>
                </div>
            </div>
            <style jsx>
                {`
            .story {
                display: grid;
                grid-template-columns: 50% 50%;
                width: 90%;
              }
              
              .item-img {
                border-radius: 10%;
              }
              .item-story {
                font-size: large;
                text-align: justify;
                display: flex;
                justify-self: center;
                flex-direction: column;
              }
            `}
            </style>
        </div>

    )
}
