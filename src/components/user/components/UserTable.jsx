import React from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress
} from "@mui/material";
import UserActions from "./UserActions";

const UserTable = ({ users, loading, onDelete }) => {
  // Asegurarse de que 'users' sea un array antes de mapearlo
  const safeUsers = Array.isArray(users) ? users : [];

  return (
    <TableContainer component={Paper}>
      {loading ? (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <CircularProgress />
        </div>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Nombre</b></TableCell>
              <TableCell><b>Email</b></TableCell>
              <TableCell><b>Teléfono</b></TableCell>
              <TableCell><b>Rol</b></TableCell>
              <TableCell><b>Estado</b></TableCell>
              <TableCell><b>Acciones</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {safeUsers.length > 0 ? (
              safeUsers.map((user) => (
                <TableRow key={user._id}>  {/* Cambié de 'id' a '_id' si estás usando MongoDB */}
                  <TableCell>{user.firstName} {user.lastName}</TableCell>  {/* Concatenando los nombres */}
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phoneNumber}</TableCell>  {/* Cambié de 'phone' a 'phoneNumber' */}
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{user.status}</TableCell>
                  <TableCell><UserActions userId={user._id} onDelete={onDelete} /></TableCell>  {/* Usé '_id' en lugar de 'id' */}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} style={{ textAlign: "center" }}>
                  No users found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};

export default UserTable;
