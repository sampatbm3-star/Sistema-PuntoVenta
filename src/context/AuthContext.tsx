import { createContext, useEffect, useContext, useState, ReactNode } from "react";
import { supabase } from "../supabase/supabase.config";

// 1. Definimos qué forma tiene nuestro contexto
interface AuthContextType {
  user: any; // Aquí podrías poner el tipo User de Supabase más adelante
}

// 2. Le damos un valor inicial (null en este caso)
const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Escuchamos los cambios de sesión (login/logout)
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log("evento", event);
        console.log("session", session);
        if (session?.user == null) {
          setUser(null);
        } else {
          setUser(session?.user);
        }
        console.log("Evento de Auth:", event);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("UserAuth debe usarse dentro de un AuthContextProvider");
  }
  return context;
};
