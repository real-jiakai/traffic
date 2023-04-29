import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


export default function Layout({ children}) {
	return (
		<>
			<div className="container mx-auto flex flex-col min-h-screen">
				<Head>
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<Header />

				<main className="text-lg font-sans antialiased font-normal flex-grow p-3">
					{children}
				</main>

				<Footer />
			</div>
		</>
	)
};
