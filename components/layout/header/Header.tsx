'use client';
import { Search, ShoppingBag, User, Menu, Heart, X } from "lucide-react";
import Container from '../Container'
import Link from 'next/link'
import Dropdown from "@/components/ui/Dropdown";
import Nav from "@/components/Nav";
import { useState } from "react";
// import Button from "@/components/ui/button";




const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="py-5 md:py-6 sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <Container>
        <div className="flex items-center gap:0 md:gap-4 lg:gap-6 justify-between">

          <div className="flex items-center gap-2">
            <button onClick={() => {
              setOpen(!open);
            }} className='text-black md:hidden'>
              {open ? <X /> : <Menu />}
            </button>

            <Link href="/" className="text-xl font-semibold tracking-tight md:text-2xl active">LUMA<span className="text-accent-foreground">.</span></Link>
          </div>


          <Nav onClick={() => setOpen(!open)}
            className={`absolute md:static top-full left-0 right-0 p-5 md:p-0 duration-300 md:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'} transition-transform md:translate-y-0`}
          />

          <div className="relative ml-auto md:flex-1 max-w-md md:block">
            <Link href="/search" className="w-9 h-9 flex items-center justify-center md:w-auto md:h-auto">
              <Search className="md:pointer-events-none md:absolute left-3 top-1/2 md:-translate-y-1/2 text-black md:text-muted-foreground h-5 w-5 md:h-4 md:w-4" size={16} />
            </Link>
            <input
              type="search"
              placeholder="Search for products..."
              className="h-10 w-full rounded-full border border-border bg-secondary pl-10 pr-4 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-foreground focus:bg-card hidden md:flex"
            />
          </div>

          <div className="inline-flex items-center gap-1">
            {/* <Dropdown /> */}
            <Link href="/account" className="ml-1 md:ml-4 w-9 h-9 flex items-center justify-center md:inline-flex">
              <Heart size={20} />
            </Link>
            <Link href="/account" className=" w-9 h-9 flex items-center justify-center md:inline-flex">
              <User size={20} />

            </Link>
            <Link href="/cart" className=" w-9 h-9 flex items-center justify-center relative">
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
