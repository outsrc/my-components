import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MyComponent } from '../../index'

test('Renders', async () => {
  const { getByRole } = render(<MyComponent />)
  expect(getByRole('heading')).toHaveTextContent('My First Component')
})
