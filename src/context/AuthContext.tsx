import { createContext, useEffect, useContext, useState, ReactNode } from "react";
import { supabase } from "../supabase/supabase.config";

// 1. Definimos la forma del contexto
interface AuthContextType {
  user: any;
}

// 2. Creamos el contexto
const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Comprobar sesión actual inmediatamente al cargar la web
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);
    };
    checkSession();

    // 2. Escuchar cambios (Login, Logout, Token refrescado)
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {/* Solo renderizamos la app cuando Supabase haya terminado de verificar la sesión */}
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Hook para usar el contexto fácilmente
export const UserAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("UserAuth debe usarse dentro de un AuthContextProvider");
  }
  return context;
};
