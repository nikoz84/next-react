import {
    beforeEach,
    afterEach,
    expect,
    test,
    assertType,
    expectTypeOf,
    describe,
    it,
} from 'vitest'
import Title from '../src/components/Title'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'

beforeEach(() => {
    render(
        <Title asTag="h3" data-testid="text">
            Texto em linha
        </Title>
    )
})

afterEach(() => {
    cleanup()
})

describe('Title Component test', () => {
    test('Show render a h3 html element', async () => {
        const title = await screen.findByText(/Text/i)

        expect(title.getElementsByTagName('h3')).toBeTruthy()
    })
    test('Should be defined inner html', () => {
        expect(screen.getByText(/Text/i)).toBeDefined()
    })
    it('Should change the background and color text', async () => {
        const title = await screen.getByText(/Text/i)
        let styles = getComputedStyle(title)
        expect(styles.color).toBe('#b94f4f')
        fireEvent.click(title)
        styles = await getComputedStyle(title)
        expect(styles.backgroundColor).toBe('#b94f4f')
        expect(styles.color).toBe('#ece6e6')
    })
})
