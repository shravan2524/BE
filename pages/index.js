import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import DemoPage from '../demo/DemoPage.tsx'

export default function Home() {
  return (
    <div className={styles.container}>
      <DemoPage />
    </div>
  )
}
