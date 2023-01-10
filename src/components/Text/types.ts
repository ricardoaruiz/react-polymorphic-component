import {
  PolymorphicComponentPropsWithRef,
  PolymorphicComponentRef,
} from '../types/polymorphic-generic-types'

export type Rainbow =
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'indigo'
  | 'violet'

export type CustomProps = {
  color?: Rainbow | 'black'
}

export type TextProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<C, CustomProps>

export type TextRef<C extends React.ElementType> = PolymorphicComponentRef<C>

export type TextComponent = <C extends React.ElementType>(
  props: TextProps<C>
) => React.ReactElement | null
