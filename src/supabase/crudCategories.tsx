import { supabase } from "../index";
import Swal from "sweetalert2";


const tabla = "categorias";


export async function InsertarCategorias(p: any, file: File) {

     const {error,data} = await supabase.rpc("insertar_categoria",p)
        if(error){
            Swal.fire({
                icon: "error",
                title: "Error al insertar la categoria",
                text: error.message
            });
            return;
        }
        const img = file.size;
        if (img!=undefined){
            const nuevo_id = data;
        const urlImagen = await subirImagen(nuevo_id, file);
        if (urlImagen) {
            const piconoeditar = {
                icono: urlImagen,
                id: nuevo_id
            }
            await EditarIconoCategorias(piconoeditar)
        }
    }
}



async function subirImagen(idcategoria: any, file: File) {

    const ruta = "categorias/" + idcategoria
    const {data,error} = await supabase.storage
    .from("imagenes")
    .upload(ruta, file, {
        cacheControl: "0",
        upsert: true,
    });
    if(error){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message
        });
        return
    }
    if (data) {
        const { data: urlData } = supabase.storage
            .from("imagenes")
            .getPublicUrl(ruta);
        return urlData.publicUrl;
    }
}


export async function EditarIconoCategorias(p: any) {

    const {error} = await supabase.from("categorias").update
    (p).eq("id",p.id);
    if(error){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message
        });
        return;
    }
    Swal.fire({
        icon: "success",
        title: "Categoria editada correctamente",
        showConfirmButton: false,
        timer: 1500
    });
    return;
}

export async function MostrarCategorias(p: any) {

    const {data} = await supabase
    .from(tabla)
    .select()
    .eq("id_empresa",p.id_empresa)
    .eq("activo",1)
    .order("id", {ascending: false});
    return data;
}