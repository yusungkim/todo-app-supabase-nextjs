import { NextPage } from 'next'
import Layout from '@components/Layout'
import Link from 'next/link'

const Home: NextPage = (props) => {
  return <Layout>
    <div className="text-2xl">
      <Link href="/dashboard">Dashboard</Link>
    </div>
  </Layout>
}

export default Home
