import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma';

// Simulated database of users for demonstration purposes


export async function authenticateUser(email: string, password: string) {
  // Find the user by email address
  console.log(email, password)
  const user = await prisma.user.findUnique({
    where: { email },
  });
  if (!user) {
    return null;
  }

  // Check that the password is valid
  const passwordValid = await bcrypt.compare(password, user.password);
  if (!passwordValid) {
    return null;
  }

  // Return the user
  return user;
}
