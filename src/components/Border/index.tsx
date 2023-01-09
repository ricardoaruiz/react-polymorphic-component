import React from 'react'

import { PolymorphicComponentRef } from '../types/polymorphic-generic-types'

import { BorderComponent, Props } from './types'

export const Border: BorderComponent = React.forwardRef(
  <C extends React.ElementType>(
    { children, style, as, color, width, variant, ...restProps }: Props<C>,
    ref: PolymorphicComponentRef<C>
  ) => {
    const Component = as || 'div'

    const innerStyles = {
      style: {
        ...style,
        borderStyle: variant || 'solid',
        borderColor: color || 'black',
        width: width ? `${width}px` : 'auto',
      },
    }

    return (
      <Component {...restProps} {...innerStyles} ref={ref}>
        {children}
      </Component>
    )
  }
)
