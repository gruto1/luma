import { Search, ShoppingBag, User, Menu, Heart } from "lucide-react";
import Container from '../Container'
import Link from 'next/link'
import Dropdown from "@/components/ui/Dropdown";
import Button from "@/components/ui/button";

const Header = () => {
  return (
    <header>
      <Container>
        <div className="flex items-center">
          <Link href="/" className="text-xl font-semibold tracking-tight md:text-2xl active">LUMA<span className="text-accent-foreground">.</span></Link>


          <div className="relative ml-auto hidden flex-1 max-w-md md:block">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
            <input
              type="search"
              placeholder="Search for products..."
              className="h-10 w-full rounded-full border border-border bg-secondary pl-10 pr-4 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-foreground focus:bg-card"
            />
          </div>

          <div>
            <Heart />
            <Dropdown />
            <Link to="#" className="relative">
              {/* <Button>
                <ShoppingBag size={18} />
              </Button> */}
              {/* {cartCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-medium text-primary-foreground">
                  {cartCount}
                </span>
              )} */}
            </Link>
          </div>

        </div>
      </Container>

    </header>
  )
}

export default Header
