import { ReactNode } from 'react'

export default function Title({
    children,
    asTag,
}: {
    children: ReactNode
    asTag: any
}) {
    const Tag = asTag
    return (
        <>
            <Tag>{children}</Tag>
            <style jsx>
                {`
                    ${Tag} {
                        color: red;
                    }
                `}
            </style>
        </>
    )
}
