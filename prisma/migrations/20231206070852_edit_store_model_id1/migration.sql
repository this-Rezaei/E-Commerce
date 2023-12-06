/*
  Warnings:

  - The primary key for the `store` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `store` table. All the data in the column will be lost.
  - Added the required column `newid` to the `store` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `store` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `newid` INTEGER NOT NULL,
    ADD PRIMARY KEY (`newid`);
