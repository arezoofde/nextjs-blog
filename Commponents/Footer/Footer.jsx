import React from 'react'

export default function Footer() {
    return (
        <>
            <footer>
                <div>
                    <ul>
                        navigat
                        <hr />
                        <li>
                            shop
                        </li>
                        <li>
                            account
                        </li>
                        <li>
                            about
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        help
                        <hr />
                        <li>
                            shopping
                        </li>
                        <li>
                            fQg
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        social
                        <hr />
                        <li>
                            instagram
                        </li>
                        <li>
                            whatsapp
                        </li>
                        <li>
                            Linkdin
                        </li>
                    </ul>
                </div>
            </footer>
            <style jsx>
                {`
        footer{
            display: grid;
            grid-template-columns: repeat(3,100px);
            width: 90%;
          }
          
        `}
            </style>
        </>
    )
}
