import { PrismaClient } from "@prisma/client";

export async function seedUsers(prisma: PrismaClient): Promise<void> {
  const examplePassword = "example123";
  const hashedPassword = await Bun.password.hash(examplePassword);

  const isMatch = await Bun.password.verify(examplePassword, hashedPassword);

  console.log("password isMatch", isMatch);

  const user = await prisma.users.upsert({
    where: { email: "barney@flintstones.com" },
    update: {},
    create: {
      username: "test",
      password: hashedPassword,
      email: "barney@flintstones.com",
      claims: ["admin", "user"]
    }
  });

  console.log("Seeded users", user);
}
