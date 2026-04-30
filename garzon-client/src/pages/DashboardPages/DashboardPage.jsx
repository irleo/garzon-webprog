import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { DataGrid } from "@mui/x-data-grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Gauge } from "@mui/x-charts/Gauge";
import { Typography, Card, CardContent } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import { legendClasses } from "@mui/x-charts/ChartsLegend";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

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
  height: "100%",
  borderRadius: "24px",
  backgroundColor: "hsl(var(--card) / 0.74)",
  border: "1px solid hsl(var(--border) / 0.85)",
  boxShadow: "0 24px 80px rgb(0 0 0 / 0.28)",
  backdropFilter: "blur(18px)",
  overflow: "hidden",
};

const chartSx = {
  color: "hsl(var(--foreground))",
  [`& .${legendClasses.label}`]: {
    fill: "hsl(var(--foreground)) !important",
    color: "hsl(var(--foreground)) !important",
    fontWeight: 600,
  },
  "& text": { fill: "hsl(var(--foreground)) !important" },
  "& .MuiChartsAxis-tickLabel": {
    fill: "hsl(var(--muted-foreground)) !important",
  },
  "& .MuiChartsAxis-label": { fill: "hsl(var(--foreground)) !important" },
  "& .MuiChartsAxis-line": { stroke: "hsl(var(--primary))" },
  "& .MuiChartsAxis-tick": { stroke: "hsl(var(--primary))" },
};

const gaugeSx = {
  "& text": { fill: "hsl(var(--foreground)) !important" },
  "& .MuiGauge-valueText": {
    fill: "hsl(var(--foreground)) !important",
    fontWeight: 800,
  },
  "& .MuiGauge-referenceArc": { fill: "hsl(var(--border))" },
  "& .MuiGauge-valueArc": { fill: "hsl(var(--primary))" },
};

function DashboardPage() {
  return (
    <Box sx={{ maxWidth: "100%", px: { xs: 2, md: 3 }, py: 3 }}>
      {/* Header */}
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
        Dashboard
      </Typography>

      {/* Row 1: Stat Cards + Gauges */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2.5}
        sx={{ mb: 3 }}
        alignItems="stretch"
      >
        {/* Stat Cards */}
        <Stack direction="column" spacing={2.5} sx={{ flex: 1 }}>
          <Card sx={panelSx}>
            <CardContent sx={{ p: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  color: "hsl(var(--muted-foreground))",
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                Total Users
              </Typography>
              <Typography
                variant="h4"
                sx={{ fontWeight: 900, letterSpacing: "-0.04em" }}
              >
                {rows.length}
              </Typography>
            </CardContent>
          </Card>

          <Card sx={panelSx}>
            <CardContent sx={{ p: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  color: "hsl(var(--muted-foreground))",
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                Average Age
              </Typography>
              <Typography
                variant="h4"
                sx={{ fontWeight: 900, letterSpacing: "-0.04em" }}
              >
                {(
                  rows.reduce((sum, row) => sum + (row.age || 0), 0) /
                  rows.filter((row) => row.age !== null).length
                ).toFixed(1)}
              </Typography>
            </CardContent>
          </Card>
        </Stack>

        {/* Gauges */}
        <Card sx={{ ...panelSx, flex: 1 }}>
          <CardContent
            sx={{
              p: 3,
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Stack
              direction="row"
              spacing={3}
              alignItems="center"
              justifyContent="center"
            >
              <Gauge width={130} height={130} value={50} sx={gaugeSx} />
              <Gauge
                width={130}
                height={130}
                value={50}
                valueMin={10}
                valueMax={60}
                sx={gaugeSx}
              />
            </Stack>
          </CardContent>
        </Card>

        {/* Pie Chart */}
        <Card sx={{ ...panelSx, flex: 1 }}>
          <CardContent
            sx={{
              p: 3,
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 10, label: "series A" },
                    { id: 1, value: 15, label: "series B" },
                    { id: 2, value: 20, label: "series C" },
                  ],
                },
              ]}
              width={260}
              height={220}
              sx={chartSx}
            />
          </CardContent>
        </Card>
      </Stack>

      {/* Row 2: Bar Chart */}
      <Card sx={{ ...panelSx, mb: 3 }}>
        <CardContent sx={{ p: 3 }}>
          <BarChart
            series={[
              { data: [35, 44, 24, 34], label: "Series 1" },
              { data: [51, 6, 49, 30], label: "Series 2" },
            ]}
            height={290}
            xAxis={[
              {
                data: ["Q1", "Q2", "Q3", "Q4"],
                scaleType: "band",
                label: "Quarters",
              },
            ]}
            title="Quarterly Sales"
            sx={chartSx}
          />
        </CardContent>
      </Card>

      {/* Row 3: Data Grid + Map */}
      <Stack direction={{ xs: "column", lg: "row" }} spacing={2.5}>
        {/* Data Grid */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
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
                  sx={{
                    border: "none",
                    color: "hsl(var(--foreground))",
                    backgroundColor: "transparent",
                    "& .MuiDataGrid-main": {
                      borderRadius: "18px",
                      overflow: "hidden",
                    },
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
                    "& .MuiDataGrid-row:hover": {
                      backgroundColor: "hsl(var(--primary) / 0.08)",
                    },
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
                    "& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within":
                      { outline: "none" },
                    "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within":
                      { outline: "none" },
                    "& .MuiDataGrid-footerContainer": {
                      borderColor: "hsl(var(--border))",
                      color: "hsl(var(--foreground))",
                      backgroundColor: "hsl(var(--card) / 0.55)",
                    },
                    "& .MuiTablePagination-root, & .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows":
                      { color: "hsl(var(--foreground))" },
                    "& .MuiTablePagination-actions": {
                      color: "hsl(var(--foreground))",
                    },
                    "& .MuiTablePagination-actions button": {
                      color: "hsl(var(--foreground))",
                    },
                    "& .MuiCheckbox-root": {
                      color: "hsl(var(--muted-foreground))",
                    },
                    "& .MuiCheckbox-root.Mui-checked": {
                      color: "hsl(var(--primary))",
                    },
                    "& .MuiDataGrid-menuIconButton, & .MuiDataGrid-sortIcon": {
                      color: "hsl(var(--foreground))",
                    },
                    "& .MuiDataGrid-columnSeparator": {
                      color: "hsl(var(--border))",
                    },
                    "& .MuiDataGrid-overlay": {
                      color: "hsl(var(--foreground))",
                      backgroundColor: "hsl(var(--card) / 0.85)",
                    },
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* Map */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ mb: 2, fontWeight: 850, letterSpacing: "-0.03em" }}
          >
            Location Map
          </Typography>
          <Card sx={panelSx}>
            <CardContent sx={{ p: 2 }}>
              <Box
                sx={{
                  height: 400,
                  width: "100%",
                  overflow: "hidden",
                  borderRadius: "20px",
                  border: "1px solid hsl(var(--border))",
                  "& .leaflet-popup-content-wrapper, & .leaflet-popup-tip": {
                    backgroundColor: "hsl(var(--card))",
                    color: "hsl(var(--foreground))",
                    border: "1px solid hsl(var(--border))",
                  },
                }}
              >
                <MapContainer
                  center={[14.604253, 120.994314]}
                  zoom={13}
                  style={{ height: "100%", width: "100%" }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={[14.604253, 120.994314]}>
                    <Popup>
                      National University-Manila <br />
                      <i>
                        551 F Jhocson St, Sampaloc, Manila, 1008 Metro Manila
                      </i>
                    </Popup>
                  </Marker>
                </MapContainer>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Stack>
    </Box>
  );
}

export default DashboardPage;
