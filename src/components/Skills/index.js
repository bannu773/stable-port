import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import WordCloud from './wordcloud'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const skillsArray = 'Skills'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
            <br />
          </h1>
          <p>
            As a mediocre programmer, I strive to continuously improve my skills and knowledge to become a better developer.
          </p>
          <p>
            With extensive practice and hard work, I have successfully answered around 500 problems on Geeks for Geeks and LeetCode platforms.
          </p>
          <p>As a Front End Developer, I specialize in creating visually appealing and user-friendly web interfaces that enhance the user experience.</p>
          <p>I am always excited to take on new challenges that allow me to grow and expand my skills as a developer, and I find great satisfaction in overcoming obstacles and achieving my goals.</p>
        </div>

        <div className="tagcloud-wrap">
          <WordCloud />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Skills
