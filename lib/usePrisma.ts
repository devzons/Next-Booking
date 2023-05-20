'use client'

import { useEffect } from 'react'
import { prisma } from './prisma'

const usePrisma = (): PrismaClient => {
  useEffect(() => {
    const cleanup = async (): Promise<void> => {
      await prisma.$disconnect()
    }

    // Clean up the Prisma client on unmount
    return cleanup
  }, [])

  return prisma
}

export default usePrisma
