import { PolymorphicComponentPropsWithRef } from '../types/polymorphic-generic-types'

export type Rainbow =
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'indigo'
  | 'violet'

export type TextProps = {
  color?: Rainbow | 'black'
}

export type Props<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, TextProps>

export type TextComponent = <C extends React.ElementType>(
  props: Props<C>
) => React.ReactElement | null
