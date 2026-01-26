// prisma/seed.ts

// prisma/seed.ts – top part

import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

// Debug prints (keep for now)
console.log("DATABASE_URL:", process.env.DATABASE_URL);

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL missing in .env");
}

const adapter = new PrismaMariaDb(process.env.DATABASE_URL);  // ← Pass string directly

const prisma = new PrismaClient({
  adapter,
  log: ['query', 'info', 'warn', 'error'],
});

// ... rest of your code

// Your main() function and seeding logic remain unchanged...


async function main() {
  console.log("🏎️ Starting seeding...");

  const porsche = await prisma.brand.upsert({
    where: { name: "Porsche" },
    update: {},
    create: {
      name: "Porsche",
      logoUrl: "https://logo.clearbit.com/porsche.com"
    }
  });

  const tesla = await prisma.brand.upsert({
    where: { name: "Tesla" },
    update: {},
    create: {
      name: "Tesla",
      logoUrl: "https://logo.clearbit.com/tesla.com"
    }
  });

  const taycan = await prisma.model.create({
    data: {
      name: "Taycan Turbo S",
      bodyType: "Sedan",
      fuelType: "Electric",
      brandId: porsche.id,
      leaseTerms: {
        create: [
          { months: 36, milesPerYear: 10000, monthlyPayment: 1850, downPayment: 5000 },
          { months: 48, milesPerYear: 12000, monthlyPayment: 1650, downPayment: 7500 }
        ]
      }
    }
  });

  const modelS = await prisma.model.create({
    data: {
      name: "Model S Plaid",
      bodyType: "Sedan",
      fuelType: "Electric",
      brandId: tesla.id,
      leaseTerms: {
        create: [
          { months: 36, milesPerYear: 12000, monthlyPayment: 1100, downPayment: 3000 }
        ]
      }
    }
  });

  await prisma.inventory.createMany({
    data: [
      {
        vin: "WP0ZZZ91ZLS123456",
        modelId: taycan.id,
        colorExterior: "Gentian Blue",
        colorInterior: "Black Leather",
        status: "AVAILABLE"
      },
      {
        vin: "5YJSA1E26LF987654",
        modelId: modelS.id,
        colorExterior: "Solid Black",
        colorInterior: "White Premium",
        status: "AVAILABLE"
      }
    ]
  });

  console.log("✅ Seeding complete! Luxury fleet added.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
