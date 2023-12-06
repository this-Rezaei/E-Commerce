/*
  Warnings:

  - Added the required column `rate` to the `Store` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `store` ADD COLUMN `rate` VARCHAR(191) NOT NULL;
