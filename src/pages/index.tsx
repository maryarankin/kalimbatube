import Navbar from '../components/Navbar'
import KalimbaPlayer from '../components/KalimbaPlayer'


export default function Home() {
  return <>
    <Navbar />
    <div className="flex h-full mt-20 justify-center"><KalimbaPlayer /></div>
    <div>hello world</div>
  </>
}
