import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import data from './data.js';
import artwork from '../images/artwork.png';
import {
  Grid,
  List,
  Paper,
  ListSubheader,
  ListItem,
  ListItemText,
  Container,
  Button,
} from '@material-ui/core';
import Results from './Results';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    position: 'absolute',
    right: 5,
    padding: '1px 10px',
    position: 'absolute',
    color: '#06D6A0',
    background: 'white',
    border: '1px solid #06D6A0',
    borderRadius: '6px',
  },
  templateText: {
    marginTop: '30px',
  },
  container: {
    marginRight: '100px',
    marginTop: '100px',
  },
  paperItem: {
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    position: 'relative',
    width: '85%',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  grid: {
    margin: '40px 0',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    // height: '100vh',
    // width: '100vw',
    position: 'relative',
    width: '85%',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Preview = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [customers] = useState(data);

  const handleOpen = () => {
    setOpen(true);
    setSent(false);
  };

  const handleClose = () => {
    setOpen(false);
    setSent(false);
  };
  const handleSent = () => {
    setSent(true);
  };

  return (
    <Container fixed className={classes.container}>
      <div>
        <Results customers={customers} open={open} setOpen={setOpen} />
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">Close</h2>
              <Grid container className={classes.grid}>
                {sent ? <ThankYou /> : <PreviewItems handleSent={handleSent} />}
              </Grid>
            </div>
          </Fade>
        </Modal>
      </div>
    </Container>
  );
};

const PreviewItems = ({ handleSent }) => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={6}>
        <Paper className={classes.paperItem}>
          <div className={classes.badge}>English</div>
          <p className={classes.templateText}>
            Dear Phil-san
            <div style={{ marginTop: '10px' }}></div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            nihil repudiandae vitae non, quas nisi quisquam, tempora, dolorum
            deleniti dignissimos amet reiciendis libero voluptatibus quod
            ducimus? Iste quas accusantium tempora inventore necessitatibus
            fugiat consequatur corporis dicta maxime blanditiis repellendus
            iure, rerum nostrum error dolorum facere delectus aut. Voluptates ab
            eius itaque, quas deleniti placeat quam saepe iure.
          </p>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paperItem}>
          <div className={classes.badge}>Somali</div>
          <p className={classes.templateText}>
            Salaam Phil-san
            <div style={{ marginTop: '10px' }}></div>
            Ra’iisal Wasaare ku-xigeenkii hore ee Soomaaliya Maxamed Cumar Carte
            ayaa lagu waramayaa in uu gaaray magaalada Hargeysa kaddib markii uu
            cafis ka helay madaxweynaha Somaliland Muuse Biixi Cabdi. Wareegto
            ka soo baxday xafiiska madaxweynaha Somaliland Muuse Biixi Cabdi
            ayaa lagu sheegay in madaxtooyadu cafis u fidiyay Maxamed Cumar
            Carte si uu u yimaado magaalada Hargeysa oo uu ku xanuunsanayo
            Aabihii Cumar Carte Khaalib.
          </p>
        </Paper>
      </Grid>
      <Grid
        item
        style={{
          marginTop: '40px',
          display: 'flex',
          justifyContent: 'flex-end',
          width: '93%',
        }}
      >
        <Button color="primary" onClick={handleSent} variant="contained">
          Send translated version
        </Button>
      </Grid>
    </>
  );
};

const ThankYou = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center', color: '#131F37', width: '100%' }}>
        Thank you. The letters are being shipped to the patients
      </h1>
      <img src={artwork} style={{ maxWidth: '400px', margin: '0 auto' }} />
    </>
  );
};

export default Preview;
