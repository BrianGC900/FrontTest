import React from "react";
import { IconButton } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { toast } from "react-toastify";  // Notificaciones Toastify
import Swal from "sweetalert2"; // Importar SweetAlert2
import "react-toastify/dist/ReactToastify.css";
import { deleteUser } from "../services/UserService";
import { useNavigate } from "react-router-dom";

const UserActions = ({ userId, onUserDeleted }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
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
        const success = await deleteUser(userId);
        if (success) {
          toast.success("Usuario eliminado correctamente ✅");
          onUserDeleted(); // Recargar la lista de usuarios
        } else {
          toast.error("Error al eliminar usuario ❌");
        }
      }
    });
  };

  const handleEdit = () => {
    navigate(`/users/edit/${userId}`);
  };

  return (
    <>
      <IconButton color="primary" onClick={handleEdit}>
        <Edit />
      </IconButton>
      <IconButton color="error" onClick={handleDelete}>
        <Delete />
      </IconButton>
    </>
  );
};

export default UserActions;
