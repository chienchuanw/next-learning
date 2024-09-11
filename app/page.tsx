import Image from 'next/image'
import Link from "next/link"
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      {/* Old way using a tag which will reload whole page when click the link*/}

      {/* <a href="/users">Users</a> */}

      {/* Using Link tag instead for optimizing the loading */}
      {/* Remember to import Link first before using the Link tag */}
      <Link href="/users">Users</Link>
      <ProductCard></ProductCard>
    </main>
  )
}

