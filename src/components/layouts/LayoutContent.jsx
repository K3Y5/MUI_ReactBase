import React, { Component } from "react";
import { Outlet } from "react-router-dom";

class LayoutContent extends Component {
  render() {
    return (
      <div>
        <Outlet />
      </div>
    );
  }
}

export default LayoutContent;
