import Container from '@/components/common/Container'
import { Truck, RotateCcw, ShieldCheck, Headphones } from 'lucide-react'
import { title } from 'process'


const chooseUsData = [
    { icon: Truck, title: "Free Delivery", desc: "On orders over $100" },
    { icon: RotateCcw, title: "Easy Returns", desc: "30 day return policy" },
    { icon: ShieldCheck, title: "Secure Payment", desc: "Encrypted checkout" },
    { icon: Headphones, title: "24/7 Support", desc: "Always here to help" },
]

const ChooseUs = () => {
    return (
        <section className="py-10 bg-surface">
            <Container>
                <div className="rounded-3xl  ">
                    <div className="grid gap-8 grid-cols-2 md:grid-cols-4">
                        {chooseUsData.map(({icon:Icon, title, desc}, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center gap-4">
                                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-card text-foreground shadow-soft ">
                                    <Icon size={20} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-foreground">{title}</h4>
                                    <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default ChooseUs
