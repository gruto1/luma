import Container from '@/components/common/Container'
import Button from '@/components/ui/Button'
import React from 'react'

const NewsLetterSection = () => {
    return (
        <section className="py-10 pb-20">
            <Container>
                <div className="overflow-hidden rounded-3xl border border-border bg-card p-10 text-center md:p-16">
                    <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Newsletter</span>
                    <h2 className="mt-3 text-3xl tracking-tight text-foreground md:text-4xl">Join the Luma list.</h2>
                    <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
                        Be the first to know about new arrivals, exclusive previews, and member-only offers.
                    </p>
                    <form className="mx-auto mt-7 flex max-w-md flex-col gap-2 sm:flex-row">
                        <input
                            type="email"
                            required
                            placeholder="Enter your email"
                            className="h-12 flex-1 rounded-full border border-border bg-background px-5 text-sm outline-none transition-colors focus:border-foreground"
                        />
                        {/* <Button type="submit" size="lg" className="h-12 rounded-full px-7 text-sm">
                        
                    </Button> */}
                    <Button type="submit" size="lg" className="h-12 rounded-full px-7 text-sm">Subscribe</Button>
                    </form>
                </div>
            </Container>
        </section>
    )
}

export default NewsLetterSection
