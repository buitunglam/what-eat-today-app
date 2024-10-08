import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogSetFood({
  openDialog,
  closeDialogSetFood,
}) {
  return (
    <React.Fragment>
      <Dialog
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={closeDialogSetFood}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Set món ăn hôm nay"}</DialogTitle>
        <DialogContent>
          <DialogContentText className="pb-0">
            <ul>
                <li>Thịt bò xào thiên lí</li>
                <li>bầu nấu tôm</li>
            </ul>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
