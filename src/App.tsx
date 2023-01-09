import { useRef } from 'react'

import { Border, Emphasis, Text } from './components'

export const App = () => {
  const ref1 = useRef<HTMLHeadingElement | null>(null)
  const ref2 = useRef<HTMLAnchorElement | null>(null)
  const ref3 = useRef<HTMLParagraphElement | null>(null)

  return (
    <div>
      <Text as="h1" ref={ref1}>
        Text as H1
      </Text>

      <Text as="h2" color="violet" style={{ backgroundColor: 'black' }}>
        Text as H2
      </Text>

      <Text as="a" href="http://www.google.com" ref={ref2}>
        Text as anchor with href
      </Text>

      <Text> and here is an element without as prop (render a span)</Text>

      <br />
      <Text as={Emphasis}>This text is in emphasis</Text>

      <br />
      <Border as="p" color="red" variant="dotted" width={300} ref={ref3}>
        Content in a border
      </Border>
    </div>
  )
}
