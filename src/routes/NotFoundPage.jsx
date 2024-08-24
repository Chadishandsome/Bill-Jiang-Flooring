import React from 'react'
import { useLocation } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div style={{ paddingLeft: `1rem`}}>
      <h1>404 - Page Not Found</h1>
      <h2 style={{ paddingBottom: `22.5rem`}}>The requested URL {useLocation().pathname} was not found on this server.</h2>
    </div>
  )
}

export default NotFoundPage
