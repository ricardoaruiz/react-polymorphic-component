// Begin Internal types
type AsProp<C extends React.ElementType> = {
  as?: C
}

type PropsToOmit<C extends React.ElementType, Props> = keyof (Props & AsProp<C>)
// End Internal types

// Use in a component without ref
export type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = Record<string, never>
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>

// Use in a component with ref
export type PolymorphicComponentPropsWithRef<
  C extends React.ElementType,
  Props = Record<string, never>
> = PolymorphicComponentProps<C, Props> & {
  ref?: PolymorphicComponentRef<C>
}

// Type of ref prop in a component that uses PolimorphicComponentPropsWithRef
export type PolymorphicComponentRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>['ref']
