import { ReactNode, SyntheticEvent } from 'react'

export default function Title({
    asTag,
    children,
}: {
    asTag: any
    children?: ReactNode
}) {
    const HtmlTag = asTag
    const style = { color: '#b94f4f' }

    function handleClick(e: SyntheticEvent<HTMLElement>) {
        const target = e.currentTarget
        target.style.backgroundColor = '#b94f4f'
        target.style.color = '#ece6e6'
    }

    return (
        <HtmlTag style={style} onClick={handleClick}>
            {children}
        </HtmlTag>
    )
}
