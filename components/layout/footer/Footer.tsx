
import Link from "next/link";
import Container from "../../common/Container";
import { footerLinks } from "@/constants/footerLinks";
import { socialLinks } from "@/constants/footerLinks";


// type SocialLinkProps ={
//   name: string,
//   href: string,
//   icon: React.ElementType
// }


// type FooterColProps = {
//   title: string;
//   links: string[];

// }

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-border bg-surface pt-10 pb-6">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Left section */}
          <div>
            <Link href="/" className="text-xl font-semibold tracking-tight">
              LUMA<span className="text-accent-foreground">.</span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Considered fashion essentials, made to last. Crafted from the finest materials with intention and care.
            </p>

            <div className="mt-5 flex items-center gap-2">
              {socialLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  aria-label={link.name}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {/* <span dangerouslySetInnerHTML={{ __html: link.icon }} /> */}
                </Link>
              ))}
            </div>
          </div>

          {/* Footer columns */}
          {footerLinks.map(({ title, links }) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-foreground">{title}</h4>
              <ul className="mt-4 space-y-2.5">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© 2026 Luma Studio. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Cookies</Link>
          </div>
        </div>

      </Container>
    </footer>
  )
}

export default Footer
