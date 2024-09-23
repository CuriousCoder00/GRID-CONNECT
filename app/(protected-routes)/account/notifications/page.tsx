import Link from 'next/link'
import React from 'react'

const Notifications = () => {
  return (
    <div className="flex flex-col w-full h-full max-h-[90vh]">
      <div className="text-xs">
        <Link className="mr-1" href="/account">Account</Link>
        &gt; Notifications
      </div>
      Notifications and Newsletters
    </div>
  )
}

export default Notifications
