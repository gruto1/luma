'use client'

import { useState } from "react";

const SizeBtn = () => {

    const [size, setSize] = useState("M");
    const sizes = ["XS", "S", "M", "L", "XL"];
    return (
        <div className="flex flex-wrap gap-2">
            {sizes.map((s) => (
                <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`h-10 min-w-12 rounded-full border px-4 text-sm transition-colors cursor-pointer ${size === s
                        ? "border-foreground bg-foreground text-background"
                        : "border-border bg-card hover:border-foreground"
                        }`}
                >
                    {s}
                </button>
            ))}
        </div>
    )
}

export default SizeBtn
