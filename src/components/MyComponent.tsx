import * as React from 'react'

interface MyComponentProps {
  name: string
}

export const MyComponent: React.FC<MyComponentProps> = ({ name }) => (
  <div role='heading' aria-level={1}>
    My First Component: {name}
  </div>
)
