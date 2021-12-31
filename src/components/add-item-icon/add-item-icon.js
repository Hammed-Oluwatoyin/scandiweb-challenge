import React, { Component } from "react";
import { ReactComponent as CircleIcon } from "../../assets/circle-icon.svg";

import { StyledCircleIcon } from "../../category/categoryElements";

class AddItemIcon extends Component {
  render() {
    return (
      <StyledCircleIcon>
        <CircleIcon />
      </StyledCircleIcon>
    );
  }
}

export default AddItemIcon;
