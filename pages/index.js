import Layout from '@/components/Layout'
import Head from 'next/head'
import JMS from '@/components/JMS'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>流量监控</title>
      </Head>
      <div>
        <h3>科学上网</h3>
        <JMS />
     </div>
   </Layout>
  )
}
