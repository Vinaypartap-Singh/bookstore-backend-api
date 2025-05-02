/*
  Warnings:

  - Added the required column `bookDownloadUrl` to the `BookStore` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bookGenre` to the `BookStore` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BookStore" ADD COLUMN     "bookDownloadUrl" TEXT NOT NULL,
ADD COLUMN     "bookGenre" TEXT NOT NULL;
