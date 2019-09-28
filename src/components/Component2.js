import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function Component2() {
  const props = useSpring(
    {
      opacity: 1, 
      marginTop: 0,
      from: {
        opacity: 0, 
        marginTop: -500
      },
      config: {
        duration: 1000,
        delay: 1000
      }
    }
  )

  return (
    <animated.div style={props}>
      <div style={c1style}>
        <h1>Component 2</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipiscising elit.
          Possimus nobis adipisci eum minima deserunt at porro, beritatis officia
          commodi itaque volupatates vel suscipit assumenda solutaipsa voluptatibus laudantium labore harum?
        </p>
      </div>
    </animated.div>
  )
}

const c1style = {
  background: 'slateblue',
  color: 'white',
  padding: '1.5rem'
}
