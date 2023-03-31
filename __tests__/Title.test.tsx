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
import { cleanup, render, screen } from '@testing-library/react'
import userEvent  from '@testing-library/user-event'

beforeEach(() => {
    render(
        <Title asTag="h3" data-testid="text">
            Texto h3
        </Title>
    )
})

afterEach(() => {
    cleanup()
})

describe('Title Component test', () => {
    test('Show render a h3 html element', async () => {
        const title = await screen.findByText(/Text/i)
        screen.debug()
        expect(title.getElementsByTagName('h3')).toBeTruthy()
    })
    test('Should be defined inner html', () => {
        expect(screen.getByText(/Text/i)).toBeDefined()
    })
    it('Should change the background and color text', async () => {
        const user = userEvent.setup();
        const title = await screen.getByText(/Text/i)
        let styles = getComputedStyle(title)
        expect(styles.color).toBe('#b94f4f')
        await user.click(title)
        styles = await getComputedStyle(title)
        screen.debug()
        expect(styles.backgroundColor).toBe('#b94f4f')
        expect(styles.color).toBe('#ece6e6')
    })
})
