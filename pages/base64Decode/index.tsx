import Head from 'next/head'
import { useState } from 'react';
import { Header } from '../../components/header';
import { decode } from '../../utils/base64';
import styles from "./base64decode.module.scss";

export default function Home() {
  const [converted, setConverted] = useState('')

  function change(params:string) {
    if (params) {
      const conv = decode(params)
      setConverted(conv)
    } else {
      setConverted('')
    }
  }

  return (
    <div>
      <Head>
        <title>SuperConvert - Base64Decode</title>
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="robots" content="index, follow"/>
      </Head>

      <Header title={'Base64 Decode'} />

      <main className={styles.container}>
        <div className={styles.side}>
          <textarea onChange={ev => change(ev.target.value)}
                    defaultValue={''}
                    spellCheck={false}
                    autoFocus={true}
                    name={'base64'}
                    tabIndex={1}
                    placeholder={'Your Base64 string here'}></textarea>
        </div>
        <div className={styles.side}>
          <textarea name="" value={converted} disabled placeholder={'Decoded'}></textarea>
        </div>
      </main>
    </div>
  )
}
