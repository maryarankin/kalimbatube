import Link from "next/link"
import { useEffect, useState } from "react"

const Navbar = () => {
  const [showAccountDetails, setShowAccountDetails] = useState(false)

  useEffect(() => {
    if (document.cookie == 'loggedIn=yes') {
      setShowAccountDetails(true)
    }
  }, [])

  return (
    <div className="flex justify-around">
      <div>
        <Link href="/">KalimbaTube</Link>
      </div>
      {showAccountDetails
        ? <div><Link href="/account">username</Link></div>
        : <div><Link href="/login">Login</Link></div>
      }
    </div>
  )
}

export default Navbar