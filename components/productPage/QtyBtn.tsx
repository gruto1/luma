'use client'

import { Plus, Minus, Heart } from "lucide-react";
import Button from "@/components/ui/Button"
import { useState } from "react";

const QtyBtn = () => {

    const [qty, setQty] = useState(1);
    return (
        <>
            <div className="flex h-12 items-center rounded-full border border-border bg-card">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="grid h-12 w-12 place-items-center text-muted-foreground hover:text-foreground cursor-pointer" aria-label="Decrease">
                    <Minus size={14} />
                </button>
                <span className="w-8 text-center text-sm font-medium">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} className="grid h-12 w-12 place-items-center text-muted-foreground hover:text-foreground cursor-pointer" aria-label="Increase">
                    <Plus size={14} />
                </button>
            </div>
            <Button size="lg" className="h-12 flex-1 rounded-full text-sm">Add to cart</Button>
            <Button size="icon" variant="outline" className="h-12 w-12 rounded-full" aria-label="Wishlist">
                <Heart size={16} />
            </Button>
        </>
    )
}

export default QtyBtn
