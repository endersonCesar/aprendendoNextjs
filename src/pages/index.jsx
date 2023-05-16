import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export async function getInitialProps() {
  return {};
}

export default function Home() {
  const [nome, setNome] = useState()
  const [senha, setSenha] = useState()

  return (
    <div>
      <input onChange={(e) => setNome(e.target.value)}></input>
    </div>
  )
}
