import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Header from "../components/Header"
import Foods from "../components/Foods"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Decentralized Doordash</title>
                <meta name="description" content="Decentralized Doordash" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Foods />
        </div>
    )
}
