import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import _default from "@emotion/styled";
import { Link } from "react-router-dom";

export default function AnchorTemporaryDrawer({
  state,
  setState,
  toggleDrawer,
}) {
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      id={"sidebar"}
    >
      <List id={"list"}>
        {["HOME", "BLUE", "RED", "GREEN", "ORANGE", "PURPLE", "PINK"].map(
          (text, index) => (
            <ListItem key={text} disablePadding id="listeditems">
              <Link
                to={text === "HOME" ? "/" : `/${text.toLowerCase()}`}
                id="AppLinks"
              >
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </Link>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <>
      <div>
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              id={"drawer"}
            >
              <h3 className="rest">Color Picker</h3>
              <p>Pick a color! Any color!</p>
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}