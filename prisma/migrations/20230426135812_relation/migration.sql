/*
  Warnings:

  - Added the required column `author` to the `article` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `article` ADD COLUMN `author` VARCHAR(191) NOT NULL,
    ADD COLUMN `categoryId` BIGINT UNSIGNED NULL;

-- AddForeignKey
ALTER TABLE `article` ADD CONSTRAINT `article_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
