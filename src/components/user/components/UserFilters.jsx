import React, { useEffect } from "react";
import { TextField, Select, MenuItem } from "@mui/material";

const UserFilters = ({ search, setSearch, roleFilter, setRoleFilter, statusFilter, setStatusFilter }) => {
  useEffect(() => {
    if (![ "", "admin", "user" ].includes(roleFilter)) {
      setRoleFilter(""); 
    }
    if (![ "", "active", "inactive" ].includes(statusFilter)) {
      setStatusFilter("");
    }
  }, [roleFilter, statusFilter, setRoleFilter, setStatusFilter]);

  return (
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
      <TextField
        label="Buscar por nombre o email"
        variant="outlined"
        size="small"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ flex: 1, marginRight: 2 }}
      />
      <Select
        value={roleFilter}
        onChange={(e) => setRoleFilter(e.target.value)}
        displayEmpty
        size="small"
        sx={{ minWidth: 120, marginRight: 2 }}
      >
        <MenuItem value="">Todos los roles</MenuItem>
        <MenuItem value="admin">Admin</MenuItem>
        <MenuItem value="user">Usuario</MenuItem>
      </Select>
      <Select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        displayEmpty
        size="small"
        sx={{ minWidth: 120, marginRight: 2 }}
      >
        <MenuItem value="">Todos los estados</MenuItem>
        <MenuItem value="active">Activo</MenuItem>
        <MenuItem value="inactive">Inactivo</MenuItem>
      </Select>
    </div>
  );
};

export default UserFilters;
