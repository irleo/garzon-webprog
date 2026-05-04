import { useRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { BarChart } from "@mui/x-charts/BarChart";
import { Gauge } from "@mui/x-charts/Gauge";
import { PieChart } from "@mui/x-charts/PieChart";
import { legendClasses } from "@mui/x-charts/ChartsLegend";
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
    flex: 1,
    minWidth: 180,
    description: "This column has a value getter and is not sortable.",
    sortable: false,
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
  "& .MuiChartsAxis-line, & .MuiChartsAxis-tick": {
    stroke: "hsl(var(--primary))",
  },
  "& .MuiChartsTooltip-table th": {
    color: "hsl(var(--background)) !important",
  },
  "& .MuiChartsTooltip-valueCell": {
    color: "hsl(var(--primary)) !important",
  },
};

const gaugeSx = {
  "& text, & .MuiGauge-valueText": {
    fill: "hsl(var(--foreground)) !important",
    fontWeight: 800,
  },
  "& .MuiGauge-referenceArc": { fill: "hsl(var(--border))" },
  "& .MuiGauge-valueArc": { fill: "hsl(var(--primary))" },
};

const dataGridSx = {
  border: "none",
  color: "hsl(var(--foreground))",
  backgroundColor: "transparent",
  "& .MuiDataGrid-main": { borderRadius: "18px", overflow: "hidden" },
  "& .MuiDataGrid-columnHeader, & .MuiDataGrid-filler--horizontal": {
    backgroundColor: "hsl(var(--primary) / 0.16)",
    color: "hsl(var(--foreground))",
    borderBottom: "1px solid hsl(var(--border))",
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
  "& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within, & .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within":
    {
      outline: "none",
    },
  "& .MuiDataGrid-footerContainer": {
    borderColor: "hsl(var(--border))",
    color: "hsl(var(--foreground))",
    backgroundColor: "hsl(var(--card) / 0.55)",
  },
  "& .MuiTablePagination-root, & .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows, & .MuiTablePagination-actions, & .MuiTablePagination-actions button":
    {
      color: "hsl(var(--foreground))",
    },
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

const actionGroupSx = {
  p: 0.6,
};

const actionButtonSx = {
  minHeight: 40,
  px: 2,
  borderRadius: "14px",
  textTransform: "none",
  fontWeight: 800,
  color: "hsl(var(--foreground))",
  borderColor: "hsl(var(--border) / 0.85)",
  transition: "all 0.2s ease",
  "&:hover": {
    borderColor: "hsl(var(--primary) / 0.65)",
    backgroundColor: "hsl(var(--primary) / 0.14)",
    boxShadow: "0 0 18px hsl(var(--primary) / 0.18)",
  },
};

const ReportsPage = () => {
  const printRef = useRef(null);

  const handlePrint = () => {
    const printContent = printRef.current;
    if (!printContent) return;

    const printWindow = window.open("", "_blank", "width=1200,height=900");
    if (!printWindow) return;

    const headMarkup = Array.from(
      document.querySelectorAll('style, link[rel="stylesheet"]'),
    )
      .map((node) => node.outerHTML)
      .join("");

    const exportedAt = new Intl.DateTimeFormat("en-US", {
      dateStyle: "long",
      timeStyle: "short",
    }).format(new Date());

    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Reports Summary PDF</title>
          ${headMarkup}
          <style>
            @page {
              size: A4;
              margin: 14mm;
            }

            html,
            body {
              width: 100%;
              max-width: 100%;
              margin: 0;
              overflow-x: hidden;
            }

            * {
              box-sizing: border-box;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }

            body {
              margin: 0;
              font-family: Arial, Helvetica, sans-serif;
              color: #f8fafc;
              background:
                radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.18), transparent 35%),
                radial-gradient(circle at 80% 30%, rgba(59, 130, 246, 0.14), transparent 35%),
                linear-gradient(to bottom, #0b1020, #020617);
            }

            .report-shell {
              width: 100%;
              max-width: 100%;
              min-height: 100vh;
              padding: 8mm 4mm;
            }

            .report-header {
              position: relative;
              margin-bottom: 24px;
              padding: 24px;
              border: 1px solid rgba(148, 163, 184, 0.28);
              border-radius: 24px;
              background: rgba(15, 23, 42, 0.78);
              box-shadow: 0 24px 80px rgba(0, 0, 0, 0.28);
              overflow: hidden;
            }

            .report-header::before {
              content: "";
              position: absolute;
              inset: 0;
              background: radial-gradient(circle at top right, rgba(139, 92, 246, 0.22), transparent 36%);
              pointer-events: none;
            }

            .report-eyebrow {
              position: relative;
              z-index: 1;
              display: inline-flex;
              align-items: center;
              margin-bottom: 12px;
              padding: 6px 12px;
              border-radius: 999px;
              border: 1px solid rgba(139, 92, 246, 0.45);
              background: rgba(139, 92, 246, 0.16);
              color: #ddd6fe;
              font-size: 12px;
              font-weight: 700;
              letter-spacing: 0.04em;
              text-transform: uppercase;
            }

            .report-header h1 {
              position: relative;
              z-index: 1;
              margin: 0 0 8px;
              color: #f8fafc;
              font-size: 32px;
              font-weight: 800;
              letter-spacing: -0.04em;
            }

            .report-header p {
              position: relative;
              z-index: 1;
              max-width: 760px;
              margin: 0;
              color: #cbd5e1;
              font-size: 14px;
              line-height: 1.6;
            }

            .report-meta {
              position: relative;
              z-index: 1;
              margin-top: 14px !important;
              color: #a78bfa !important;
              font-weight: 700;
            }

            .report-content {
              display: block;
              width: 100%;
              max-width: 100%;
            }

            .report-content > * {
              width: 100%;
              max-width: 100%;
              margin-bottom: 18px;
            }

            .report-content .MuiCard-root {
              width: 100% !important;
              max-width: 100% !important;
              color: #f8fafc !important;
              background: rgba(15, 23, 42, 0.78) !important;
              border: 1px solid rgba(148, 163, 184, 0.28) !important;
              border-radius: 18px !important;
              box-shadow: none !important;
              break-inside: avoid;
              page-break-inside: avoid;
              overflow: hidden;
            }

            .report-content .MuiCardContent-root {
              padding: 18px !important;
            }

            .report-content h6,
            .report-content .MuiTypography-h6 {
              color: #f8fafc !important;
              font-weight: 800 !important;
              letter-spacing: -0.02em !important;
            }

            .report-content p,
            .report-content .MuiTypography-body1,
            .report-content .MuiTypography-body2 {
              color: #cbd5e1 !important;
            }

            .report-content svg {
              max-width: 100% !important;
            }

            .report-content text,
            .report-content .MuiChartsLegend-label {
              fill: #f8fafc !important;
              color: #f8fafc !important;
            }

            .report-content .MuiChartsAxis-tickLabel {
              fill: #cbd5e1 !important;
            }

            .report-two-column {
              display: grid !important;
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
              gap: 16px !important;
              width: 100% !important;
              max-width: 100% !important;
              align-items: stretch !important;
            }

            .report-two-column > * {
              width: 100% !important;
              max-width: 100% !important;
              min-width: 0 !important;
              flex: none !important;
              margin: 0 !important;
            }

            .report-two-column > :not(style) ~ :not(style) {
              margin-left: 0 !important;
              margin-top: 0 !important;
            }

            .report-two-column .MuiCharts-root,
            .report-two-column svg {
              width: 100% !important;
              max-width: 100% !important;
            }

            .report-table-card {
              overflow: hidden !important;
            }

            .report-table-card .MuiDataGrid-root {
              width: 100% !important;
              max-width: 100% !important;
              min-width: 0 !important;
              color: #f8fafc !important;
              border: none !important;
              background: rgba(15, 23, 42, 0.5) !important;
            }

            .report-table-card .MuiDataGrid-main {
              overflow: hidden !important;
            }

            .report-table-card .MuiDataGrid-columnHeader {
              background: rgba(139, 92, 246, 0.18) !important;
              color: #f8fafc !important;
            }

            .report-table-card .MuiDataGrid-columnHeaderTitle {
              color: #000000 !important;
            }

            .report-table-card .MuiDataGrid-cell {
              color: #f8fafc !important;
            }

            .report-table-card .MuiDataGrid-cell {
              border-color: rgba(148, 163, 184, 0.25) !important;
            }

            .report-table-card .MuiDataGrid-virtualScroller {
              overflow: hidden !important;
            }

            .report-table-card .MuiDataGrid-footerContainer,
            .report-table-card .MuiCheckbox-root,
            .report-table-card .MuiTablePagination-root,
            .report-table-card .MuiTablePagination-selectLabel,
            .report-table-card .MuiTablePagination-displayedRows {
              color: #f8fafc !important;
            }

            @media print {
              html,
              body {
                width: 100%;
                max-width: 100%;
                overflow-x: hidden;
              }

              .report-shell {
                width: 100%;
                max-width: 100%;
                padding: 2mm 4mm;
              }

              .report-header {
                margin-bottom: 16px;
              }

              .report-content {
                width: 100%;
                max-width: 100%;
              }

              .report-two-column {
                grid-template-columns: 1fr 1fr !important;
              }
            }
          </style>
        </head>
        <body>
          <main class="report-shell">
            <header class="report-header">
              <span class="report-eyebrow">Generated report</span>
              <h1>Reports Summary</h1>
              <p>Analytics overview for generated reports, category breakdown, and completion performance.</p>
              <p class="report-meta">Prepared on ${exportedAt}</p>
            </header>

            <section class="report-content">
              ${printContent.outerHTML}
            </section>
          </main>
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  return (
    <Box>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        sx={{ mb: 4, width: "100%" }}
      >
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 900,
              letterSpacing: "-0.04em",
              textShadow: "0 0 18px hsl(var(--primary) / 0.28)",
            }}
          >
            Reports
          </Typography>

          <Typography
            variant="body2"
            sx={{ mt: 0.5, color: "hsl(var(--muted-foreground))" }}
          >
            Report analytics overview showing generated reports, category
            breakdown, and current completion performance.
          </Typography>
        </Box>

        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          sx={{
            ...actionGroupSx,
            flexShrink: 0,
            justifyContent: { xs: "flex-start", md: "flex-end" },
          }}
        >
          <Button variant="outlined" sx={actionButtonSx}>
            Generate
          </Button>

          <Button variant="outlined" onClick={handlePrint} sx={actionButtonSx}>
            Export PDF
          </Button>

          <Button variant="outlined" sx={actionButtonSx}>
            Filter
          </Button>
        </Stack>
      </Stack>

      <Stack ref={printRef} spacing={3}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Monthly Report Output
            </Typography>

            <Typography
              variant="body2"
              sx={{ mb: 3, color: "hsl(var(--foreground) / 0.72)" }}
            >
              This chart compares how many reports were generated and how many
              were completed across the last four months.
            </Typography>

            <BarChart
              series={[
                { data: [18, 24, 20, 27], label: "Generated" },
                { data: [12, 19, 17, 23], label: "Completed" },
              ]}
              height={300}
              xAxis={[
                {
                  data: ["January", "February", "March", "April"],
                  scaleType: "band",
                  label: "Months",
                },
              ]}
              sx={chartSx}
            />
          </CardContent>
        </Card>

        <Stack
          className="report-two-column"
          direction={{ xs: "column", lg: "row" }}
          spacing={3}
        >
          <Card sx={{ flex: 1 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Report Category Share
              </Typography>

              <Typography
                variant="body2"
                sx={{ mb: 3, color: "hsl(var(--foreground) / 0.72)" }}
              >
                This chart shows the distribution of report requests by category
                for the current reporting period.
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <PieChart
                  series={[
                    {
                      data: [
                        { id: 0, value: 14, label: "Sales" },
                        { id: 1, value: 10, label: "Users" },
                        { id: 2, value: 8, label: "Inventory" },
                        { id: 3, value: 6, label: "Finance" },
                      ],
                    },
                  ]}
                  width={280}
                  height={220}
                  sx={chartSx}
                />
              </Box>
            </CardContent>
          </Card>

          <Card sx={{ flex: 1 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Completion Rate
              </Typography>

              <Typography
                variant="body2"
                sx={{ mb: 3, color: "hsl(var(--foreground) / 0.72)" }}
              >
                The gauge highlights the current percentage of reports completed
                on time based on the latest reporting cycle.
              </Typography>

              <Box
                sx={{
                  minHeight: 220,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Gauge width={180} height={180} value={78} sx={gaugeSx} />
              </Box>
            </CardContent>
          </Card>
        </Stack>

        <Card className="report-table-card">
          <CardContent>
            <DataGrid
              rows={rows}
              columns={columns}
              experimentalFeatures={{ newEditingApi: true }}
              initialState={{
                pagination: { paginationModel: { pageSize: 5 } },
              }}
              pageSizeOptions={[5]}
              checkboxSelection
              disableRowSelectionOnClick
              sx={dataGridSx}
            />
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
};

export default ReportsPage;
