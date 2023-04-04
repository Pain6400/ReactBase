import { Helmet } from 'react-helmet-async';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
// import {
//   AppTasks,
//   AppNewsUpdate,
//   AppOrderTimeline,
//   AppCurrentVisits,
//   AppWebsiteVisits,
//   AppTrafficBySite,
//   AppWidgetSummary,
//   AppCurrentSubject,
//   AppConversionRates,
// } from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
          <h3>test</h3>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
          <h3>test</h3>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
          <h3>test</h3>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
          <h3>test</h3>
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
           <h3>test</h3>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
           <h3>test</h3>
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
          <h3>test</h3>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
          <h3>test</h3>
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <h3>test</h3>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <h3>test</h3>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
          <h3>test</h3>
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <h2>test</h2>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
