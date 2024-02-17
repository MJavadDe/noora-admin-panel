import { z } from "zod";

const schema = z.object({
    name: z.string(),
    quantity: z.number().min(1).max(1000),
    image: z.string(),
    price: z.number().min(10000).max(10000000),
    
})

export default schema