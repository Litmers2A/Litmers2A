import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // 마이그레이션에는 directUrl(직접 연결)을 사용
    url: process.env["DIRECT_URL"] || process.env["DATABASE_URL"],
  },
});
