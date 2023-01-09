import { PolymorphicComponentPropsWithRef } from '../types/polymorphic-generic-types'

export type BorderType =
  | 'dotted'
  | 'dashed'
  | 'solid'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset'
  | 'none'
  | 'hidden'

type BorderProps = {
  color?: string
  width?: number
  variant?: BorderType
}

export type Props<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, BorderProps>

export type BorderComponent = <C extends React.ElementType>(
  props: Props<C>
) => React.ReactElement | null
