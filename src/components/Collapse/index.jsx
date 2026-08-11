import { useState } from 'react'
import './Collapse.scss'

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <span className="collapse-title">{title}</span>
        <span className={`collapse-arrow ${isOpen ? 'open' : ''}`}>⌄</span>
      </div>
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
        <div className="collapse-content-inner">{content}</div>
      </div>
    </div>
  )
}

export default Collapse