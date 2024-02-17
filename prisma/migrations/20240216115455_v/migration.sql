/*
  Warnings:

  - A unique constraint covering the columns `[email,name]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `authorName` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Product` DROP FOREIGN KEY `Product_authorEmail_fkey`;

-- DropIndex
DROP INDEX `User_email_key` ON `User`;

-- AlterTable
ALTER TABLE `Product` ADD COLUMN `authorName` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_email_name_key` ON `User`(`email`, `name`);

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_authorEmail_authorName_fkey` FOREIGN KEY (`authorEmail`, `authorName`) REFERENCES `User`(`email`, `name`) ON DELETE RESTRICT ON UPDATE CASCADE;
