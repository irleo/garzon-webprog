import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "firstName", headerName: "First name", width: 150, editable: true },
  { field: "lastName", headerName: "Last name", width: 150, editable: true },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const panelSx = {
  borderRadius: "24px",
  backgroundColor: "hsl(var(--card) / 0.74)",
  border: "1px solid hsl(var(--border) / 0.85)",
  boxShadow: "0 24px 80px rgb(0 0 0 / 0.28)",
  backdropFilter: "blur(18px)",
  overflow: "hidden",
};

const dataGridSx = {
  border: "none",
  color: "hsl(var(--foreground))",
  backgroundColor: "transparent",
  "& .MuiDataGrid-main": { borderRadius: "18px", overflow: "hidden" },
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "hsl(var(--primary) / 0.16)",
    color: "hsl(var(--foreground))",
    borderBottom: "1px solid hsl(var(--border))",
  },
  "& .MuiDataGrid-columnHeader": {
    color: "hsl(var(--foreground))",
    fontWeight: 800,
  },
  "& .MuiDataGrid-columnHeaderTitle": {
    color: "hsl(var(--background))",
    fontWeight: 800,
  },
  "& .MuiDataGrid-cell": {
    borderColor: "hsl(var(--border) / 0.65)",
    color: "hsl(var(--foreground))",
  },
  "& .MuiDataGrid-row": { color: "hsl(var(--foreground))" },
  "& .MuiDataGrid-row:hover": { backgroundColor: "hsl(var(--primary) / 0.08)" },
  "& .MuiDataGrid-row.Mui-selected": {
    backgroundColor: "hsl(var(--primary) / 0.22) !important",
    color: "hsl(var(--foreground)) !important",
  },
  "& .MuiDataGrid-row.Mui-selected:hover": {
    backgroundColor: "hsl(var(--primary) / 0.28) !important",
  },
  "& .MuiDataGrid-row.Mui-selected .MuiDataGrid-cell": {
    color: "hsl(var(--foreground)) !important",
    borderColor: "hsl(var(--primary) / 0.35)",
  },
  "& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within": {
    outline: "none",
  },
  "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within":
    { outline: "none" },
  "& .MuiDataGrid-footerContainer": {
    borderColor: "hsl(var(--border))",
    color: "hsl(var(--foreground))",
    backgroundColor: "hsl(var(--card) / 0.55)",
  },
  "& .MuiTablePagination-root, & .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows":
    { color: "hsl(var(--foreground))" },
  "& .MuiTablePagination-actions": { color: "hsl(var(--foreground))" },
  "& .MuiTablePagination-actions button": { color: "hsl(var(--foreground))" },
  "& .MuiCheckbox-root": { color: "hsl(var(--muted-foreground))" },
  "& .MuiCheckbox-root.Mui-checked": { color: "hsl(var(--primary))" },
  "& .MuiDataGrid-menuIconButton, & .MuiDataGrid-sortIcon": {
    color: "hsl(var(--foreground))",
  },
  "& .MuiDataGrid-columnSeparator": { color: "hsl(var(--border))" },
  "& .MuiDataGrid-overlay": {
    color: "hsl(var(--foreground))",
    backgroundColor: "hsl(var(--card) / 0.85)",
  },
};

const UsersPage = () => {
  return (
    <Box sx={{ maxWidth: "100%", px: { xs: 2, md: 3 }, py: 3 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          mb: 4,
          fontWeight: 900,
          letterSpacing: "-0.04em",
          textShadow: "0 0 18px hsl(var(--primary) / 0.28)",
        }}
      >
        Users
      </Typography>

      <Typography
        variant="h5"
        gutterBottom
        sx={{ mb: 2, fontWeight: 850, letterSpacing: "-0.03em" }}
      >
        Users Overview
      </Typography>

      <Card sx={panelSx}>
        <CardContent sx={{ p: 2 }}>
          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: { paginationModel: { pageSize: 5 } },
              }}
              pageSizeOptions={[5]}
              checkboxSelection
              disableRowSelectionOnClick
              sx={dataGridSx}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UsersPage;
