import React from 'react'

import { PolymorphicComponentRef } from '../types/polymorphic-generic-types'

import { Props, TextComponent } from './types'

export const Text: TextComponent = React.forwardRef(
  <C extends React.ElementType = 'span'>(
    { as, style, color, children, ...props }: Props<C>,
    ref?: PolymorphicComponentRef<C>
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
