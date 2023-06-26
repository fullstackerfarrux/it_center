-- CreateTable
CREATE TABLE "admin" (
    "id" UUID DEFAULT gen_random_uuid(),
    "admin_name" VARCHAR NOT NULL,
    "password" VARCHAR NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" VARCHAR DEFAULT 'null',

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);
