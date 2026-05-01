import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Gauge } from "@mui/x-charts/Gauge";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { legendClasses } from "@mui/x-charts/ChartsLegend";

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

const ReportsPage = () => {
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
        Reports
      </Typography>

      {/* Row 1: Gauges + Pie Chart */}
      <Typography
        variant="h5"
        gutterBottom
        sx={{ mb: 2, fontWeight: 850, letterSpacing: "-0.03em" }}
      >
        Gauges
      </Typography>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2.5}
        sx={{ mb: 3 }}
        alignItems="stretch"
      >
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
      <Typography
        variant="h5"
        gutterBottom
        sx={{ mb: 2, fontWeight: 850, letterSpacing: "-0.03em" }}
      >
        Charts
      </Typography>

      <Card sx={panelSx}>
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
            sx={chartSx}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default ReportsPage;