import { Grid, Paper } from '@material-ui/core';

export default function BlogCard() {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={6} md={6}>
          <Paper>
            <h1>One Page4</h1>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Paper>
            <h1>Two Page1</h1>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
