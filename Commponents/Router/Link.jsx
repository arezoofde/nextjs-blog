import React from 'react'
import { useRouter } from 'next/router'
import { historyPushState } from "./history"

export default function Link({ to, children }) {
    const router = useRouter()


    function handlClick(e) {
        e.preventDefault()

        historyPushState(to)
    }


    return (
        <a href={to} onClick={handlClick}>
            {children}
        </a>
    )
}
