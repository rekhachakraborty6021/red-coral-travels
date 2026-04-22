import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import fs from 'fs';
import path from 'path';

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                const adminEmail = process.env.ADMIN_EMAIL;
                const adminPassword = process.env.ADMIN_PASSWORD;

                // Check Admin
                if (
                    credentials?.email === adminEmail &&
                    credentials?.password === adminPassword
                ) {
                    return {
                        id: '1',
                        name: 'Admin User',
                        email: adminEmail,
                        role: 'admin',
                    };
                }

                // Check Customers
                try {
                    const usersPath = path.join(process.cwd(), 'data', 'users.json');

                    if (fs.existsSync(usersPath)) {
                        const usersData = fs.readFileSync(usersPath, 'utf-8');
                        const users = JSON.parse(usersData);

                        const user = users.find((u: any) => u.email === credentials?.email);

                        if (user && user.password === credentials?.password) {
                            return {
                                id: user.id,
                                name: user.name,
                                email: user.email,
                                role: 'customer',
                            };
                        }
                    }
                } catch (error) {
                    console.error('Auth error:', error);
                }

                return null;
            },
        }),
    ],
    pages: {
        signIn: '/auth/login',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            if (session?.user) {
                (session.user as any).role = token.role;
            }
            return session;
        },
    },
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
