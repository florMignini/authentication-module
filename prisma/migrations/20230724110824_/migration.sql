/*
  Warnings:

  - You are about to drop the `Department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Employee` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Department";

-- DropTable
DROP TABLE "Employee";

-- CreateTable
CREATE TABLE "employees" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "birth_date" TEXT NOT NULL,
    "identity_number" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "zip_code" TEXT NOT NULL,
    "hire_date" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "departmentId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "employees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "departments" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "departments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "employees_email_key" ON "employees"("email");

-- CreateIndex
CREATE UNIQUE INDEX "employees_username_key" ON "employees"("username");

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "departments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
