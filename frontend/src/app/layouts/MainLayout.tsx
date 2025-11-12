import ModalRoot from "@features/modal/ModalRoot"
import type React from "react"

type MainLayoutProps = {
    children:React.ReactNode
}
export default function MainLayout({children}:MainLayoutProps){
    return(
        <>
        <ModalRoot/>
        <main>
            {children}
        </main>
        </>
    )
}