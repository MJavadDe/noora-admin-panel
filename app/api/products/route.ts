import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import  schema  from "./schema";


export async function GET(request:NextRequest) {
    const products = await prisma.product.findMany();

    return NextResponse.json(products)
}


export async function POST(request: NextRequest) { 
    const body = await request.json();

    const isValid = schema.safeParse(body);


    if (!isValid.success) {
        return NextResponse.json(isValid.error.errors,{status:401})
    }

    const newProduct = await prisma.product.create({
        data: {
            name: body.name,
            price: body.price,
            quantity: body.quantity,
            image: body.image
        }
        
    })

    return NextResponse.json(newProduct)    

}