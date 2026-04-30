import { Star } from "lucide-react";

const Stars = ({ rating }: { rating: number }) => {
    return (
        <div className='flex items-center gap-0.5'>
            {Array.from({ length: 5 }).map((_, i) => {
                const filled = i < Math.round(rating);
                return (
                    <Star size={14} key={i} className={filled ? "fill-[var(--rating)] text-[var(--rating)]" : "text-border"} />
                )
            })}

        </div>
    )
}

export default Stars


