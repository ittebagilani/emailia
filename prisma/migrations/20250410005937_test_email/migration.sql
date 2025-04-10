/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Business` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `Business` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Business` table. All the data in the column will be lost.
  - You are about to drop the column `lastOpenedDate` on the `List` table. All the data in the column will be lost.
  - Added the required column `placeId` to the `Business` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `List` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Business" DROP COLUMN "createdAt",
DROP COLUMN "phoneNumber",
DROP COLUMN "updatedAt",
ADD COLUMN     "email" TEXT,
ADD COLUMN     "latitude" DOUBLE PRECISION,
ADD COLUMN     "longitude" DOUBLE PRECISION,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "placeId" TEXT NOT NULL,
ADD COLUMN     "priceLevel" INTEGER,
ADD COLUMN     "rating" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "List" DROP COLUMN "lastOpenedDate",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "VerifiedEmail" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VerifiedEmail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "VerifiedEmail_email_key" ON "VerifiedEmail"("email");

-- AddForeignKey
ALTER TABLE "VerifiedEmail" ADD CONSTRAINT "VerifiedEmail_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
