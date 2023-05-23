import React, { useEffect, useState } from 'react'
import TagCloud from 'TagCloud'

const WordCloud = () => {
  const [isLoading, setLoad] = useState(true)

  const container = '.content'
  const texts = [
    'Java',
    'React',
    'Tailwind css',
    'Bootstrap',
    'opencv',
    'numpy',
    'pandas',
    'Redux',
    'HTML5',
    'CSS3',
    'JS',
    'FireBase',
    'MySQl',
    'C++',
    'C',
    'Python',
    'Git',
    'Linux',
  ]
  const options = {
    radius: 300,
    // animation speed
    // slow, normal, fast
    maxSpeed: 'fast',
    initSpeed: 'fast',
    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,
    // interact with cursor move on mouse out
    keep: true,
  }
  //   to render wordcloud each time the page is reloaded
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (isLoading) {
      TagCloud(container, texts, options)
      setLoad(false)
    }
  })

  return (
    <div className="main">
      <span className="content"></span>
    </div>
  )
}

export default WordCloud
