import { create } from "zustand";
import { supabase, MostrarUsuarios } from "../index";

// 1. Definimos la forma de nuestra "Store"
interface AuthState {
  user: any; // Puedes cambiar 'any' por el tipo de usuario de Supabase más adelante
  loginGoogle: () => Promise<void>;
  cerrarSesion: () => Promise<void>;
}

// 2. Le pasamos la interfaz <AuthState> a 'create'
export const useAuthStore = create<AuthState>((set) => ({
  user: null, // Es importante inicializar los valores
  loginGoogle: async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    
  },
  cerrarSesion: async () => {
    await supabase.auth.signOut();
    set({ user: null });
  },
}));
