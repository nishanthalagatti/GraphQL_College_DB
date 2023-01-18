/*
  Warnings:

  - The primary key for the `Course` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Course` table. All the data in the column will be lost.
  - The primary key for the `Instructor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Instructor` table. All the data in the column will be lost.
  - The primary key for the `Student` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Student` table. All the data in the column will be lost.
  - Added the required column `courseId` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `instructorId` to the `Instructor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studentId` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Course` DROP FOREIGN KEY `Course_instructorId_fkey`;

-- DropForeignKey
ALTER TABLE `Takes` DROP FOREIGN KEY `Takes_courseId_fkey`;

-- DropForeignKey
ALTER TABLE `Takes` DROP FOREIGN KEY `Takes_studentId_fkey`;

-- AlterTable
ALTER TABLE `Course` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `courseId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`courseId`);

-- AlterTable
ALTER TABLE `Instructor` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `instructorId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`instructorId`);

-- AlterTable
ALTER TABLE `Student` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `studentId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`studentId`);

-- AddForeignKey
ALTER TABLE `Course` ADD CONSTRAINT `Course_instructorId_fkey` FOREIGN KEY (`instructorId`) REFERENCES `Instructor`(`instructorId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Takes` ADD CONSTRAINT `Takes_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student`(`studentId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Takes` ADD CONSTRAINT `Takes_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `Course`(`courseId`) ON DELETE RESTRICT ON UPDATE CASCADE;
