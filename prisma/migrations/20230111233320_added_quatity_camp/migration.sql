/*
  Warnings:

  - Added the required column `amount` to the `products ` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_products " (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "banner" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "category_id" TEXT NOT NULL,
    CONSTRAINT "products _category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_products " ("banner", "category_id", "created_at", "description", "id", "name", "price", "updated_at") SELECT "banner", "category_id", "created_at", "description", "id", "name", "price", "updated_at" FROM "products ";
DROP TABLE "products ";
ALTER TABLE "new_products " RENAME TO "products ";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
