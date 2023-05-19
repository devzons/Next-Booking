import { useEffect } from 'react'
import { prisma, PrismaClient } from './prisma'

const usePrisma = () => {
  useEffect(() => {
    const cleanup = async () => {
      await prisma.$disconnect()
    }

    // Clean up the Prisma client on unmount
    return cleanup
  }, [])

  return prisma
}

export default usePrisma
