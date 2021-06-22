import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
    const prismaClient = new PrismaClient(); // aqui de deberia de tener un sigleton

    if(req.method === 'GET') {
        const data = await prismaClient.user.findMany();
        res.status(200).json({ data });
    }
    else if(req.method === 'POST') {
        const user = req.body;
        const data = await prismaClient.user.create({data:user});

        res.status(200).json({ data });
    }
}