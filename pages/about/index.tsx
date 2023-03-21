import Title from "@/src/components/Title"
import Link from "next/link"

export default function AboutPage(){
    return (
        <>
            <h1>ABOUT PAGE</h1>
            <Title asTag="h2">
                Título
            </Title>
            <Link href="/">
                Go to home page
            </Link>
        </>
    )
}