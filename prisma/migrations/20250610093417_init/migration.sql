-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SiteAnalytics" (
    "id" TEXT NOT NULL,
    "siteName" TEXT NOT NULL,
    "visitors" BIGINT NOT NULL,

    CONSTRAINT "SiteAnalytics_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SiteAnalytics_siteName_key" ON "SiteAnalytics"("siteName");
