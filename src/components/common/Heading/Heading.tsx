import { ReactNode } from "react"

const Heading = ({ children }: { children: ReactNode }) => {
    return (
        <h1 style={{ fontSize: '27px' }}>{children}</h1>
    )
}

export default Heading