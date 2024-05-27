import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";

import { Link } from "react-router-dom";

function Home() {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState(["User 1", "User 2", "User 3"]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleAddUser = () => {
    const userName = document.getElementById("userName").value;
    setUsers([...users, userName]);
    handleClose();
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      className="bg-gray-100"
    >
      <Typography variant="h3" className="mb-8">
        Choose User
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
        {users.map((user, index) => (
          <Link key={index} to={`/u/${user}`}>
            <Button variant="outlined" color="primary" className="mr-4">
              {user}
            </Button>
          </Link>
        ))}
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleOpen}
          className="p-4"
        >
          Add
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="add-user-modal-title"
        aria-describedby="add-user-modal-description"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            position: "absolute",
            width: 400,
            backgroundColor: "white",
            padding: "16px",
            boxShadow: "24px",
            borderRadius: "8px",
          }}
        >
          <Typography variant="h6" id="add-user-modal-title" className="mb-4">
            Add a New User
          </Typography>
          <div className="m-4">
            <TextField
              id="userName"
              label="User Name"
              variant="outlined"
              fullWidth
            />
          </div>

          <Button variant="contained" color="primary" onClick={handleAddUser}>
            Add User
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}

export default Home;
