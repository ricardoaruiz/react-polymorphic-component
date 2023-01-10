import React from 'react'

import { TextComponent, TextProps, TextRef } from './types'

export const Text: TextComponent = React.forwardRef(
  <C extends React.ElementType = 'span'>(
    { as, style, color, children, ...props }: TextProps<C>,
    ref?: TextRef<C>
  ) => {
    const Component = as || 'span'

    const internalStyles = {
      style: {
        ...style,
        color: color || '',
      },
    }

    return (
      <Component {...props} {...internalStyles} ref={ref}>
        {children}
      </Component>
    )
  }
)
