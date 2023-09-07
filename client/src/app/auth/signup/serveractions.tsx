"use server"
import  prisma  from '@/lib/prisma';
import bcrypt from 'bcrypt';


export const createUser = async (username: string, email: string, password: string | Buffer) => {
  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save the user to the database
  try {
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        // Add other fields as needed
      },
    });
    return { status: 200};
  } catch (error) {
    return { status: 400, error: 'An error occurred while creating the user.' };
  }
};
