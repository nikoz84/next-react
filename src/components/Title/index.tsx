import { ReactNode } from 'react'

export default function Title({
    asTag,
    children,
}: {
    asTag: any
    children?: ReactNode
}) {
    const HtmlTag = asTag
    const style = { color: '#b94f4f' }

    return (
        <>
            <HtmlTag style={style}>{children}</HtmlTag>
        </>
    )
}
