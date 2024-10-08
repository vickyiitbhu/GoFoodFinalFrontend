import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-white p-sticky" style={{"zIndex": "10"}}>
        <div className="col-md-4 d-flex align-items-center">
          <Link href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"></Link>
          <span className="text-muted">© 2021 GoFood, Inc</span>
          <span className="text-muted">| Contact: +919999999999</span>
        </div>
      </footer>
    </div>
  )
}
