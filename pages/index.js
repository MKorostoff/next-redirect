import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      navigate to <a href="http://localhost:3000/old-url?code=123">http://localhost:3000/old-url?code=123</a>. See that you are redirected to <a href="http://localhost:3000/new-url?code=123">http://localhost:3000/new-url?code=123</a> and the text "Code is 123" displays on screen.
    </div>
  )
}
