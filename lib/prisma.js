// lib/prisma.ts

import { PrismaClient } from '@prisma/client'

const getPrismaInstance = () => {
  if (!prisma || prisma.$disconnect) {
    prisma = new PrismaClient()
  }
  return prisma
}

export const prisma = getPrismaInstance()
