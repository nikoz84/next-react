import { expect, test, assertType, expectTypeOf, describe, it } from 'vitest'
import Title from '../src/components/Title'
import { render, screen, within } from '@testing-library/react'
import { ReactNode } from 'react'

test('Title Component', () => {
    render(<Title asTag="h2">New value</Title>)

    const title: any = within(screen.getByText('New value'))
    expect(title.getByText('New value')).toBeDefined()
})

describe('must be a function', () => {
    it('new element', () => {})
})
