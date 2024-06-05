import { React, useState } from "react";
import { HomeOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function NavBar() {
  return (
    <div>
      <Menu
        mode="horizontal"
        overflowedIndicator={<ArrowRightOutlined />}
        style={{ justifyContent: "left", backgroundColor: "#cafab5" }}
        selectedKeys={[""]}
      >
        <Link to="/">
          <Menu.Item>
            <img
              style={{ width: "10%", marginTop: "2%", marginRight: "80%" }}
              src={logo}
            />
          </Menu.Item>
        </Link>
      </Menu>
    </div>
  );
}
