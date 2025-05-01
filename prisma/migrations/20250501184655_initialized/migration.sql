-- CreateTable
CREATE TABLE "BookStore" (
    "id" TEXT NOT NULL,
    "bookName" TEXT NOT NULL,
    "bookCaption" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BookStore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tags" (
    "id" TEXT NOT NULL,
    "tags" TEXT[],
    "bookStoreId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tags_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BookStore_bookName_key" ON "BookStore"("bookName");

-- AddForeignKey
ALTER TABLE "Tags" ADD CONSTRAINT "Tags_bookStoreId_fkey" FOREIGN KEY ("bookStoreId") REFERENCES "BookStore"("id") ON DELETE SET NULL ON UPDATE CASCADE;
