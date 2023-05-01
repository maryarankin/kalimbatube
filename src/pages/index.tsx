import Image from 'next/image'
import Navbar from '../components/Navbar'
import Tine from '../components/Tine'

export default function Home() {
  return <>
    <Navbar />
    <Tine note="a" />
    <div>hello world</div>
  </>
}
