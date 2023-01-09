import React from 'react'

import { EmphasisProps } from './types'

export const Emphasis = ({ children }: EmphasisProps) => {
  return (
    <em
      style={{
        backgroundColor: 'yellow',
        color: 'black',
        fontSize: '40px',
      }}
    >
      {children}
    </em>
  )
}
