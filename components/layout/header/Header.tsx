import { Search, ShoppingBag, User, Menu, Heart } from "lucide-react";
import Container from '../Container'
import Link from 'next/link'
import Dropdown from "@/components/ui/Dropdown";
import Nav from "@/components/Nav";
// import Button from "@/components/ui/button";

const Header = () => {
  return (
    <header className=" py-6 sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <Container>
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-semibold tracking-tight md:text-2xl active">LUMA<span className="text-accent-foreground">.</span></Link>

            <Nav/>

          <div className="relative ml-auto hidden flex-1 max-w-md md:block">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
            <input
              type="search"
              placeholder="Search for products..."
              className="h-10 w-full rounded-full border border-border bg-secondary pl-10 pr-4 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-foreground focus:bg-card"
            />
          </div>

          <div className="inline-flex items-center">

            {/* <Dropdown /> */}

            <Link href="/account" className="ml-4 w-9 h-9 flex items-center justify-center md:inline-flex">
              <Heart size={20} />
            </Link>
            <Link href="/cart" className="ml-4 w-9 h-9 flex items-center justify-center relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs text-accent-foreground">
                +9
              </span>
            </Link>



          </div>

        </div>
      </Container>

    </header>
  )
}

export default Header
