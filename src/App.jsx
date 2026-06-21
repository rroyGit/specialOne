import { useEffect, useRef } from 'react'
import './App.css'

const images = ['her_0.jpeg', 'her_1.jpeg', 'her_2.jpeg']

function App() {
  const refs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          } else {
            entry.target.classList.remove('visible')
          }
        })
      },
      { threshold: 0.6 }
    )

    refs.current.forEach((el) => el && observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="gallery">
      {images.map((src, i) => (
        <div
          className="gallery-slide"
          key={src}
          ref={(el) => (refs.current[i] = el)}
        >
          <img src={`${import.meta.env.BASE_URL}${src}`} alt={`her_${i}`} />
        </div>
      ))}
    </div>
  )
}

export default App
