import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import {
  Paper,
  Theme,
  TextField,
  makeStyles,
  createStyles,
  Button,
  Typography,
  Select,
  MenuItem,
  Checkbox
} from '@material-ui/core';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    button: {
      marginTop: theme.spacing(2),
    },
    paper: { padding: theme.spacing(2) },
    sectionTitle: { marginTop: theme.spacing(2) },
  }),
);

const SectionTitle = ({ children }) => {
  const classes = useStyles();
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      className={classes.sectionTitle}
    >
      {children}
    </Typography>
  );
};

const services = [{
  key: 'tarot', text: 'Tarot', value: 'tarot'
}, {
  key: 'Astrologia', text: 'Astrologia', value: 'Astrologia'
}];
const duration = ['30 minutos', '1 hora'];

export const Agendar = () => {
  const { register, handleSubmit } = useForm();

  const classes = useStyles();
  return (
    <Layout>
      <h1>Agendar</h1>
      <Paper className={classes.paper}>
        <SectionTitle>Selecionar Servico</SectionTitle>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={services}
          name="services"
        >
          {services.map(s => {
            <MenuItem value={s}>{s}</MenuItem>;
          })}
        </Select>
        {services.map(s => {
          <Checkbox
            color="primary"
            inputRef={register}
            name='service'
            value={s}
          />;
        })}
        <SectionTitle>Email</SectionTitle>
        <TextField
          inputRef={register}
          style={{ margin: 4 }}
          placeholder="Email"
          name="email"
          fullWidth
          margin="normal"
        />
        <Button
          className={classes.button}
          type="submit"
          variant="contained"
          color="primary"
        >
          Enviar
        </Button>
      </Paper>
    </Layout>
  );
};

export default Agendar;
