import React from 'react'
import AnimatedCursor from "react-animated-cursor"

function AnimCursor() {
  return (
    // <></>
    <AnimatedCursor
      innerSize={0}  // for the main cursor
      outerSize={10}   // for the lagging behind cursor
      color='0, 0, 0'
      outerAlpha={0.4}
      innerScale={0}
      outerScale={5}
      showSystemCursor="true"
      trailingSpeed='9'
      clickables={[
        // 'a',
        // 'input[type="text"]',
        // 'input[type="email"]',
        // 'input[type="number"]',
        // 'input[type="submit"]',
        // 'label[for]',
        // 'select',
        // 'textarea',
        // 'button',
        '.link'
      ]}
    />
  )
}

export default AnimCursor