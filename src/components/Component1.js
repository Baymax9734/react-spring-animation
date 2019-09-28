import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function Component1() {
  const props = useSpring(
    {
      opacity: 1, 
      marginTop: 0,
      number: 10,
      from: {
        opacity: 0, 
        marginTop: -500,
        number: 0
      }
    }
  )

  return (
    <animated.div style={props}>
      <div style={c1style}>
        <h1>Component 1</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipiscising elit.
          Possimus nobis adipisci eum minima deserunt at porro, beritatis officia
          commodi itaque volupatates vel suscipit assumenda solutaipsa voluptatibus laudantium labore harum?
        </p>
        <div>
          <h1 style={counter}>
            <animated.span>
              {props.number}
            </animated.span>
          </h1>
        </div>
      </div>
    </animated.div>
  )
}

const c1style = {
  background: 'steelblue',
  color: 'white',
  padding: '1.5rem'
}

const counter = {
  textAlign: 'center',
  width: '100px',
  borderRadius: '50%',
  margin: '1rem auto'
}