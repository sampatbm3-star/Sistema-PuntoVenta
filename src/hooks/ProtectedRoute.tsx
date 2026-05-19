import { ReactNode } from "react";
import { Outlet, Navigate } from "react-router-dom";

// 1. Definimos la forma de las propiedades que recibe el componente
interface ProtectedRouteProps {
  user: any;           // El usuario (puede ser un objeto o null)
  redirectTo: string;  // La ruta a la que redirigir si no hay usuario
  children?: ReactNode; // El contenido que envuelve (opcional)
}

export const ProtectedRoute = ({ 
  user, 
  redirectTo, 
  children 
}: ProtectedRouteProps) => {
  // Si no hay usuario, redirigimos
  if (user == null) {
    return <Navigate replace to={redirectTo} />;
  }

  // Si hay children (uso como componente envolvente), los mostramos. 
  // Si no, mostramos el Outlet (uso como ruta padre).
  return children ? <>{children}</> : <Outlet />;
};
