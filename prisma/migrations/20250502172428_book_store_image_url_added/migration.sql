/*
  Warnings:

  - Added the required column `bookImageUrl` to the `BookStore` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BookStore" ADD COLUMN     "bookImageUrl" TEXT NOT NULL;
