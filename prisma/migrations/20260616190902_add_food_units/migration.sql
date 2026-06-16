-- AlterTable
ALTER TABLE "Food" ADD COLUMN     "nutritionBasis" TEXT NOT NULL DEFAULT '100g',
ADD COLUMN     "unit" TEXT NOT NULL DEFAULT 'g';
