// lib/prisma.ts

import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient

const getPrismaInstance = (): PrismaClient => {
  if (!prisma || prisma.$disconnect) {
    prisma = new PrismaClient()
  }
  return prisma
}

export const prisma = getPrismaInstance()
