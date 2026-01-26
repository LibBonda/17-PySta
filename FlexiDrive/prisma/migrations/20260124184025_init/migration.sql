-- CreateTable
CREATE TABLE `Brand` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `logoUrl` VARCHAR(191) NULL,

    UNIQUE INDEX `Brand_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Model` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `bodyType` VARCHAR(191) NOT NULL,
    `fuelType` VARCHAR(191) NOT NULL,
    `brandId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Inventory` (
    `vin` VARCHAR(191) NOT NULL,
    `modelId` VARCHAR(191) NOT NULL,
    `colorExterior` VARCHAR(191) NOT NULL,
    `colorInterior` VARCHAR(191) NOT NULL,
    `mileage` INTEGER NOT NULL DEFAULT 0,
    `status` ENUM('AVAILABLE', 'LEASED', 'MAINTENANCE', 'RESERVED') NOT NULL DEFAULT 'AVAILABLE',

    PRIMARY KEY (`vin`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LeaseTerm` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `modelId` VARCHAR(191) NOT NULL,
    `months` INTEGER NOT NULL,
    `milesPerYear` INTEGER NOT NULL,
    `monthlyPayment` DOUBLE NOT NULL,
    `downPayment` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contract` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `vin` VARCHAR(191) NOT NULL,
    `startDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `endDate` DATETIME(3) NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'ACTIVE',
    `stripeSessionId` VARCHAR(191) NULL,

    UNIQUE INDEX `Contract_stripeSessionId_key`(`stripeSessionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Model` ADD CONSTRAINT `Model_brandId_fkey` FOREIGN KEY (`brandId`) REFERENCES `Brand`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Inventory` ADD CONSTRAINT `Inventory_modelId_fkey` FOREIGN KEY (`modelId`) REFERENCES `Model`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LeaseTerm` ADD CONSTRAINT `LeaseTerm_modelId_fkey` FOREIGN KEY (`modelId`) REFERENCES `Model`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contract` ADD CONSTRAINT `Contract_vin_fkey` FOREIGN KEY (`vin`) REFERENCES `Inventory`(`vin`) ON DELETE RESTRICT ON UPDATE CASCADE;
