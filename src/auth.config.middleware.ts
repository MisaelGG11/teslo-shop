import type { NextAuthConfig } from "next-auth";

// Configuración SOLO para middleware - SIN PRISMA ni providers con DB
export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/new-account",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      console.log("Authorized callback", auth || "No user", nextUrl.pathname);
      
      const isLoggedIn = !!auth?.user;
      const isOnAuthPage = nextUrl.pathname.startsWith('/auth');
      const isOnCheckout = nextUrl.pathname.startsWith('/checkout');
      const isOnOrders = nextUrl.pathname.startsWith('/orders');
      const isOnProfile = nextUrl.pathname.startsWith('/profile');
      
      // Si está logueado y trata de acceder a páginas de auth, redirigir al home
      if (isLoggedIn && isOnAuthPage) {
        return Response.redirect(new URL('/', nextUrl));
      }
      
      // Si no está logueado y trata de acceder a rutas protegidas
      if (!isLoggedIn && (isOnCheckout || isOnOrders || isOnProfile)) {
        return Response.redirect(new URL('/auth/login?callbackUrl=' + encodeURIComponent(nextUrl.pathname), nextUrl));
      }
      
      return true;
    },
  },
  providers: [], // Vacío para middleware
};
