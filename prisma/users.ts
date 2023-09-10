import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

export async function seedUsers(prisma: PrismaClient): Promise<void> {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash("example123", salt);

  const user = await prisma.users.upsert({
    where: { email: "fred@flintstones.com" },
    update: {},
    create: {
      username: "test",
      password: hashedPassword,
      email: "fred@flintstones.com",
      claims: ["admin", "user"]
    }
  });

  console.log("Seeded users", user);
}
