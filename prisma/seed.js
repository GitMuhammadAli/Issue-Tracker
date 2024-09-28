// prisma/seed.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    const roles = ['ADMIN', 'DEVELOPER', 'PROJECT_MANAGER'];

    await prisma.role.deleteMany();

    // Create roles
    for (const roleName of roles) {
        await prisma.role.create({
            data: {
                name: roleName,
            },
        });
    }

    console.log("Roles seeded successfully");
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
