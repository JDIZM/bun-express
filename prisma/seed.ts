import { PrismaClient } from "@prisma/client";
import { seedUsers } from "./users";
const prisma = new PrismaClient();

async function main(): Promise<void> {
  console.log("Seeding users...");
  await seedUsers(prisma);
  const count = await prisma.users.count();
  console.log(`There are ${count} users in the database.`);
}

try {
  await main()
  await prisma.$disconnect();
} catch (e) {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
}