import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {

    // クリーンアップ
    await prisma.post.deleteMany();
    await prisma.user.deleteMany();

    const hashedPassword = await bcrypt.hash("password123", 12);

    const dummyImages = [
        'https://picsum.photos/seed/picsum/600/400',
        'https://picsum.photos/id/28/600/400'
    ]

    const user = await prisma.user.create({
        data: {
            email: "test@example.com",
            name: "Test User",
            password: "password",
            posts: {
                create: [
                    {
                        title: "初めてのブログ投稿",
                        content: "これは最初のブログ投稿です",
                        topImage: dummyImages[0],
                    },
                    {
                        title: "2番目の投稿",
                        content: "これは２つ目ののブログ投稿です",
                        topImage: dummyImages[1],
                    }
                ]
            }
        },
    });
    console.log(user);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });