/*
  Warnings:

  - Made the column `tags` on table `BookStore` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "BookStore" ALTER COLUMN "tags" SET NOT NULL;
