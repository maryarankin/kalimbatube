import Image from 'next/image'
import Navbar from '../components/Navbar'
import Tine from '../components/Tine'

export default function Home() {
  return <>
    <Navbar />
    <Tine note="a" />
    <Tine note="b" />
    <Tine note="c" />
    <Tine note="d" />
    <Tine note="e" />
    <Tine note="f" />
    <Tine note="g" />
    <div>hello world</div>
  </>
}
