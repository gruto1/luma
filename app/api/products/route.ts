import { NextResponse } from "next/server";
import { products } from "@/data/products";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    if (category) {
        const filtered = products.filter(
            (p) => p.category?.toLowerCase() === category.toLowerCase()
        );
        return NextResponse.json(filtered);
    }
    return NextResponse.json(products);
}
