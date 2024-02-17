/*
  Warnings:

  - You are about to drop the column `authorEmail` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `authorName` on the `Product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `Product` DROP FOREIGN KEY `Product_authorEmail_authorName_fkey`;

-- DropIndex
DROP INDEX `User_email_name_key` ON `User`;

-- AlterTable
ALTER TABLE `Product` DROP COLUMN `authorEmail`,
    DROP COLUMN `authorName`;

-- CreateIndex
CREATE UNIQUE INDEX `User_email_key` ON `User`(`email`);
