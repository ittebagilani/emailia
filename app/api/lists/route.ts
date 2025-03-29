import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { name, businesses } = await request.json();

    const list = await prisma.list.create({
      data: {
        name,
        userId,
        businesses: {
          create: businesses
        }
      },
      include: {
        businesses: true
      }
    });

    return NextResponse.json(list);
  } catch (error) {
    console.error('Error creating list:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 