/*
  Warnings:

  - Added the required column `state` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Student` ADD COLUMN `state` VARCHAR(191) NOT NULL;
