import React from "react";
import styled from "styled-components";
import Edit from "@material-ui/icons/Edit";
import CheckCircle from "@material-ui/icons/CheckCircle";
import TextField from "@material-ui/core/TextField";
import { InputLabel, Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
require("react-bootstrap/ModalHeader");

const StyledTable = styled.table`
  color: #848496;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 50px;
  width:75%;
  border-spacing:0;
  border-radius: 30px;
  -moz-border-radius: 15px 15px 1px 1px;
    -webkit-border-radius: 15px 15px 1px 1px;
    box-shadow: 2px 5px 8px 4px #CCCCCC;
    text-align: center;
}
`;

const TableHead = styled.thead`
  padding: 0px 0px 0px 5px;
  border-radius: 30px;
  -moz-border-radius: 15px 15px 0px 0px;
  -webkit-border-radius: 15px 15px 0px 0px;
  box-shadow: 0px 0px 8px 1px #cccccc;
  background-color: #ebedff;
`;

const TableData = styled.tr`
  //   border-bottom: 1px solid #ccc;
  border-width: 1;
  border-color: #ddd;
  border-bottom-width: 0;
  margin-left: 5px;
`;

const StyledPractices = styled.td`
  text-align: left;
  padding: 0px 0px 0px 25px;
`;

const TopPadded = styled.div`
  padding: 15px 0px 0px 0px;
`;

const LeftPadded = styled.div`
  padding: 0;
`;

function LoggingPractices() {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(2),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(1),
    },
    MenuItem: {
      fontSize: 15,
    },
    form: {
      display: "flex",
      flexDirection: "column",
      margin: "auto",
      width: "fit-content",
    },
    formControlLabel: {
      marginTop: theme.spacing(1),
    },
  }));
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  const [hours, setHours] = React.useState("");
  const handleChange = (event) => {
    setHours(event.target.value);
  };
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");

  const handleMaxWidthChange = (event) => {
    setMaxWidth(event.target.value);
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };
  return (
    <>
      <StyledTable>
        <TableHead>
          <StyledPractices> Wellness Practice</StyledPractices>
          <td> Date</td>
          <td>Logging</td>
          <td>Edit/View</td>{" "}
        </TableHead>{" "}
        <TableData>
          <StyledPractices> Log meals 7 days a week</StyledPractices>
          <td> Jan 1, 2020</td>{" "}
          <td>
            {/* <CheckCircle style={{ fill: "green" }} /> */}
            <Button
              style={{ textTransform: "none" }}
              variant="outlined"
              color="primary"
              onClick={handleClickOpen}
              size="small"
            >
              Log
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              fullWidth={fullWidth}
              maxWidth={maxWidth}
            >
              <DialogTitle id="alert-dialog-title">
                {"Log activity"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  What activity did you do?
                  <TextField
                    class="tl"
                    boxShadow={3}
                    id="outlined-start-adornment"
                    variant="outlined"
                  />
                  <TopPadded>For how long?</TopPadded>
                  <div>
                    <form
                      className={classes.root}
                      noValidate
                      autoComplete="off"
                    >
                      <div>
                        <TextField
                          boxShadow={3}
                          id="outlined-start-adornment"
                          variant="outlined"
                        />
                      </div>

                      <LeftPadded>
                        <FormControl
                          variant="outlined"
                          className={classes.formControl}
                        >
                          <InputLabel id="demo-simple-select-outlined-label">
                            Hours
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={hours}
                            onChange={handleChange}
                            label="Hours"
                            size="small"
                            inputProps={{
                              style: {
                                padding: 0,
                              },
                            }}
                          >
                            <MenuItem value="">Hours</MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                          </Select>
                        </FormControl>
                      </LeftPadded>
                    </form>
                  </div>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Submit
                </Button>
                <Button onClick={handleClose} color="primary">
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </td>
          <td></td>
        </TableData>
        <TableData>
          <StyledPractices> Log activities 5 days a week</StyledPractices>
          <td> Jan 1, 2020</td>
          <td class="pa3">
            {" "}
            <CheckCircle style={{ fill: "green" }} />
          </td>
          <td></td>
        </TableData>
        <TableData>
          <StyledPractices> Log meals 7 days a week</StyledPractices>
          <td> Jan 1, 2020</td>
          <td class="pa3">
            <CheckCircle style={{ fill: "green" }} />
          </td>
          <td>
            <Edit style={{ fill: "green" }} />
          </td>
        </TableData>
        <TableData>
          <StyledPractices> Gratefulness entry 7 days a week</StyledPractices>
          <td> Jan 1, 2020</td>
          <td class="pa3">
            {" "}
            <button type="button" class="btn btn-success">
              {" "}
              Log{" "}
            </button>
          </td>
          <td></td>
        </TableData>
        <TableData>
          <StyledPractices> 7 hours of sleep every day</StyledPractices>
          <td> Jan 1, 2020</td>
          <td>
            {" "}
            <button type="button" class="btn btn-success">
              {" "}
              Log{" "}
            </button>
          </td>
          <td></td>
        </TableData>
        <TableData>
          <StyledPractices> In bed by 10:00PM every day</StyledPractices>
          <td> Jan 1, 2020</td>
          <td class="pa3">
            {" "}
            <CheckCircle style={{ fill: "green" }} />
          </td>
          <td>
            <Edit style={{ fill: "green" }} />
          </td>
        </TableData>
        {/* </table> */}
      </StyledTable>
    </>
  );
}

export default LoggingPractices;
