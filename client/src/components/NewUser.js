import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Input from '@material-ui/core/Input';

import axios from 'axios';

export default function FormDialog() {
  const [open, setOpen] = useState(true);
  const [line1, setline1] = useState('');
  const [city, setcity] = useState('');
  const [province, setprovince] = useState('');
  const [postalCode, setpostalCode] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
        "address": {
            "line1": line1,
            "city": city,
            "province": province,
            "postalCode": postalCode
        },
        "organization": {
            "name": "Freshfields Hospital"
        },
        "firstName": firstName,
        "lastName": lastName
    }
    
    axios.post('http://localhost:5000/users/', formData).then(function (response) {
        window.location.reload(false);

      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add user
      </Button> */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Patient</DialogTitle>
        <DialogContent>

          <DialogContentText>
            Add a new user to your organisation
          </DialogContentText>
          <form id="myform" onSubmit = {handleSubmit}>
            <Input value={firstName} onInput={ e=>setfirstName(e.target.value)} placeholder="First name" nputProps={{ 'aria-label': 'First name' }} />
            <Input value={lastName}  onInput={ e=>setlastName(e.target.value)} placeholder="Last name" inputProps={{ 'aria-label': 'Last name' }} />
          <TextField
            autoFocus
            margin="dense"
            id="line1"
            label="Line 1 address"
            type="text"
            onInput={ e=>setline1(e.target.value)}
            value={line1}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="city"
            value={city}
            onInput={ e=>setcity(e.target.value)}
            label="city"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="province"
            value={province}
            onInput={ e=>setprovince(e.target.value)}
            label="province"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            value={postalCode}
            onInput={ e=>setpostalCode(e.target.value)}
            margin="postCode"
            id="name"
            label="Postal Code"
            type="text"
            fullWidth
          />
          <Button color="primary" type="submit">Submit</Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          </form>
        </DialogContent>

      </Dialog>
    </div>
  );
}
