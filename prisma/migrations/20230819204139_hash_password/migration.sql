/*
  Warnings:

  - You are about to drop the column `hash` on the `Employee` table. All the data in the column will be lost.
  - Added the required column `password` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `departmentId` on the `Employee` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "hash",
ADD COLUMN     "password" TEXT NOT NULL,
DROP COLUMN "departmentId",
ADD COLUMN     "departmentId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
