import Title from "@/src/components/Title"
import Link from "next/link"

export default function FaqPage(){
    return (
        <>
            <h1>FAQ PAGE</h1>
            <Title asTag="h2">
                Título
            </Title>
            <Link href="/">
                Go to home page
            </Link>
        </>
    )
}