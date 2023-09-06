import bcrypt from 'bcrypt';

// Simulated database of users for demonstration purposes
const users = [
  {
    id: '1',
    email: 'aryan@lol.com',
    password: '$2b$10$Q4p7N9E5OZhFq1J0/XK8oeC3tpvVvmFyaFkqzF.3E1BMTQ2Nc.ae', // Hashed password for 'password123'
    name: 'Aryan',
  },
  // Add more users as needed
];

export async function authenticateUser(email: string, password: string) {
  const user = users.find(u => u.email === email);

  if (user) {
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      return {
        id: user.id,
        email: user.email,
        name: user.name,
      };
    }
  }
  
  return null;
}
