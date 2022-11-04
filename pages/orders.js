import React from "react"
import Header from "../components/Header"
import Head from "next/head"
import styles from "../styles/Home.module.css"
import YourOrders from "../components/YourOrders"

export default function orders() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Decentralized Doordash</title>
                <meta name="description" content="Decentralized Doordash" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <YourOrders />
        </div>
    )
}
