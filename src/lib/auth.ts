// Stub — replace with NextAuth v5 auth() when authentication is configured.

interface AuthUser {
  email?: string | null;
  id?: string | null;
}

interface AuthResult {
  user?: AuthUser;
}

export async function auth(): Promise<AuthResult | null> {
  return null;
}
