import { BadgeCheckIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import { ReactNode } from 'react'

interface ContentWithTitle {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: ContentWithTitle) => {
  const pageTitle =
    process.env.NEXT_PUBLIC_APP_NAME + (title ? ` | ${title}` : '')
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-mono text-gray-800">
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main className="flex w-screen flex-1 flex-col items-center justify-center">
        {children}
      </main>
      <footer className="flex h-12 w-full items-center justify-center border-t">
        <BadgeCheckIcon className="h-6 w-6 text-blue-500" />
      </footer>
    </div>
  )
}

export default Layout
