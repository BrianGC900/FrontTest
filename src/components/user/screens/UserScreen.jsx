import React, { useState, useEffect } from "react";
import { Paper, TablePagination, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import UserFilters from "../components/UserFilters";
import UserTable from "../components/UserTable";
import { fetchUsers, deleteUser } from "../services/UserService";
import Header from "../../../layout/Header";
import Sidebar from "../../../layout/SideBar";

const UsersScreen = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openSidebar, setOpenSidebar] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    loadUsers();
  }, [search, roleFilter, statusFilter, page, rowsPerPage]);

  const loadUsers = async () => {
    setLoading(true);
    const data = await fetchUsers(search, roleFilter, statusFilter, page, rowsPerPage);
    setUsers(data);
    setLoading(false);
  };

  const handleDelete = async (id) => {
    const success = await deleteUser(id);
    if (success) loadUsers();
  };

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <>
      <Header title="Gestión de Usuarios" toggleSidebar={toggleSidebar} />

      <IconButton
        edge="start"
        color="inherit"
        aria-label="back"
        onClick={handleBackClick}
        sx={{
          position: "absolute",
          left: 36,
          top: 16,
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          borderRadius: "50%",
          padding: "10px",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
          },
          transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <ArrowBackIcon />
      </IconButton>

      <Sidebar open={openSidebar} onClose={toggleSidebar} />

      <Paper sx={{ padding: 3, maxWidth: "90%", margin: "auto", marginTop: 4 }}>
        <UserFilters
          search={search}
          setSearch={setSearch}
          roleFilter={roleFilter}
          setRoleFilter={setRoleFilter}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />
        <UserTable users={users} loading={loading} onDelete={loadUsers} />
        <TablePagination
          component="div"
          count={100}
          page={page}
          onPageChange={(e, newPage) => setPage(newPage)}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={(e) => setRowsPerPage(parseInt(e.target.value, 10))}
        />
      </Paper>
    </>
  );
};

export default UsersScreen;
