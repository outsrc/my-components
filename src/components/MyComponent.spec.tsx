import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MyComponent } from '../index'

describe('MyComponent', () => {
  it('renders', async () => {
    const { getByRole } = render(<MyComponent name='John' />)
    expect(getByRole('heading')).toHaveTextContent('My First Component: John')
  })
})
