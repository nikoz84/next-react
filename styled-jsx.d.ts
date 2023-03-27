import 'react'

declare module 'react' {
    import { StyleHTMLAttributes } from 'react'

    interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
        jsx?: boolean
        global?: boolean
    }
}
