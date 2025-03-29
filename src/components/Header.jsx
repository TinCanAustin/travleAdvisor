import { Home } from "lucide-react"
import { Button } from "../components/ui/button"
import Logo from "./Logo"

export default function Header({ resetForm }) {
    return (
        <header className="header">
            <div className="headerContent">
                <div className="logo">
                    <Logo className="logoIcon" size={28} />
                    <h1 className="logoText">TRAVEL ADVISOR</h1>
                </div>
                <Button variant="ghost" size="icon" className="homeButton" onClick={resetForm}>
                    <Home className="homeIcon" />
                    <span className="sr-only">Home</span>
                </Button>
            </div>
        </header>
    )
}