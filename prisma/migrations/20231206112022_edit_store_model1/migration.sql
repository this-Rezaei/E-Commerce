/*
  Warnings:

  - You are about to drop the column `rate` on the `store` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `store` DROP COLUMN `rate`,
    MODIFY `updatedAt` DATETIME(3) NULL;
