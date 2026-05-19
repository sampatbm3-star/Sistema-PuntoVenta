import { create } from "zustand";
import { InsertarEmpresa } from "../supabase/crudEmpresa";

interface EmpresaState {
    insertarEmpresa: (p: any, f: File | null) => Promise<boolean>;
}

export const useEmpresaStore = create<EmpresaState>((set) => ({
    insertarEmpresa: async (p: any, f: File | null) => {
        const response = await InsertarEmpresa(p, f)
        if (response) {
            console.log("Response de la empresa", response)
            return true;
        }
        return false;
    }
}))

