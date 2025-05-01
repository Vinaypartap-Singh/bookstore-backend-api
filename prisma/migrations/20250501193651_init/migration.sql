-- CreateTable
CREATE TABLE "BookStore" (
    "id" TEXT NOT NULL,
    "bookName" TEXT NOT NULL,
    "bookCaption" TEXT NOT NULL,
    "tags" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BookStore_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BookStore_bookName_key" ON "BookStore"("bookName");
