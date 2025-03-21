import React from "react";
import { IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material"; 
import { toast } from "react-toastify"; 
import Swal from "sweetalert2"; 
import { deleteUser } from "../services/UserService";
import "react-toastify/dist/ReactToastify.css";

const UserActions = ({ user, onUserDeleted }) => {

  const handleDelete = async (id) => {
    if (!id) {
      toast.error("ID de usuario no encontrado ❌");
      return;
    }

    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción eliminará al usuario permanentemente.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const success = await deleteUser(id);
          if (success) {
            toast.success("Usuario eliminado correctamente ✅");
            onUserDeleted(id); 
          } else {
            toast.error("Error al eliminar usuario ❌");
          }
        } catch (error) {
          toast.error("Hubo un error al intentar eliminar el usuario ❌");
        }
      }
    });
  };

  return (
    <>
      <IconButton color="error" onClick={() => handleDelete(user._id)}>
        <Delete />
      </IconButton>
    </>
  );
};

export default UserActions;
