import React, { useState } from "react";
import {
  Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,CircularProgress,IconButton} from "@mui/material";
import { Edit, Save, Cancel } from "@mui/icons-material";
import UserActions from "./UserActions"; 

const UserTable = ({ users, loading, onDelete, onUpdate }) => {
  const [editingUser, setEditingUser] = useState(null);
  const safeUsers = Array.isArray(users) ? users : [];
  const handleUserUpdated = (updatedUser) => {
    onUpdate(updatedUser);  
    setEditingUser(null);  
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
  };

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
                <TableRow key={user._id}>
                  <TableCell>
                    {editingUser && editingUser._id === user._id ? (
                      <input
                        type="text"
                        name="firstName"
                        value={editingUser.firstName}
                        onChange={(e) => setEditingUser({ ...editingUser, firstName: e.target.value })}
                      />
                    ) : (
                      user.firstName
                    )}
                  </TableCell>
                  <TableCell>
                    {editingUser && editingUser._id === user._id ? (
                      <input
                        type="text"
                        name="lastName"
                        value={editingUser.lastName}
                        onChange={(e) => setEditingUser({ ...editingUser, lastName: e.target.value })}
                      />
                    ) : (
                      user.lastName
                    )}
                  </TableCell>
                  <TableCell>
                    {editingUser && editingUser._id === user._id ? (
                      <input
                        type="text"
                        name="email"
                        value={editingUser.email}
                        onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                      />
                    ) : (
                      user.email
                    )}
                  </TableCell>
                  <TableCell>
                    {editingUser && editingUser._id === user._id ? (
                      <input
                        type="text"
                        name="phoneNumber"
                        value={editingUser.phoneNumber}
                        onChange={(e) => setEditingUser({ ...editingUser, phoneNumber: e.target.value })}
                      />
                    ) : (
                      user.phoneNumber
                    )}
                  </TableCell>
                  <TableCell>
                    {editingUser && editingUser._id === user._id ? (
                      <input
                        type="text"
                        name="role"
                        value={editingUser.role}
                        onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value })}
                      />
                    ) : (
                      user.role
                    )}
                  </TableCell>
                  <TableCell>
                    {editingUser && editingUser._id === user._id ? (
                      <input
                        type="text"
                        name="status"
                        value={editingUser.status}
                        onChange={(e) => setEditingUser({ ...editingUser, status: e.target.value })}
                      />
                    ) : (
                      user.status
                    )}
                  </TableCell>
                  <TableCell>
                    {editingUser && editingUser._id === user._id ? (
                      <>
                        <IconButton onClick={() => handleUserUpdated(editingUser)}>
                          <Save />
                        </IconButton>
                        <IconButton onClick={handleCancelEdit}>
                          <Cancel />
                        </IconButton>
                      </>
                    ) : (
                      <IconButton onClick={() => handleEditUser(user)}>
                        <Edit />
                      </IconButton>
                    )}
                    <UserActions user={user} onUserUpdated={handleUserUpdated} onUserDeleted={onDelete} />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6}>No se encontraron usuarios.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};

export default UserTable;
