import { supabase } from "../index";
import Swal from "sweetalert2";


export async function InsertarCategorias(p,file){
     const {error,data} = await supabase.rpc("insertar_categoria",p)
        if(error){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.message,
                
            });
        }
        const nuevo_id = data;
}