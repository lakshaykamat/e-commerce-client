import Link from "next/link"
import { Button } from "./button"
import { ModeToggle } from "./ModeToggle"

const Navbar = () => {
  return (
    <header className="flex justify-around border boder-b-2 py-4 border-gray-800">
    <h3>BoAt Ahead</h3>
    <div className="hidden  sm:flex items-center gap-3">
        <Link href={`/`}>
      <Button variant={"ghost"}>Home</Button>
        </Link>
      <Link href={`/products`}>
        <Button variant={"ghost"}>Product</Button>
      </Link>
      <Button variant={"ghost"}>Contact</Button>
      <Button variant={"ghost"}>Help</Button>
      <ModeToggle></ModeToggle>
      <Button>Sign out</Button>
    </div>
  </header>
  )
}

export default Navbar