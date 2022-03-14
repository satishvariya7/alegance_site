import React, { useEffect, useState } from "react";
import { PageHeader, Button, Menu, Dropdown, Image, Avatar } from "antd";
import { useParams } from "react-router-dom";

const styles = {
  header: {
    fontSize: "20px",
    padding: "3px 20px",
  },
  profile: {
    border: "1px solid",
    borderRadius: "20px",
  },
  profileName: {
    marginRight: "9px",
    fontSize: "15px",
  },
};
export default function Header() {
  const [userName, setUserName] = useState("Loading...");
  useEffect(() => {
    const userName = localStorage.getItem("username");
    setUserName(userName);
  }, []);
  const menu = (
    <Menu>
      <Menu.Item key={1}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          Profile
        </a>
      </Menu.Item>
      <Menu.Item key={2}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          My Teams
        </a>
      </Menu.Item>
      <Menu.Item key={3}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.tmall.com/"
        >
          Security
        </a>
      </Menu.Item>
      <Menu.Item key={3}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.tmall.com/"
        >
          Notification Settings
        </a>
      </Menu.Item>
      <Menu.Item key={3}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.tmall.com/"
        >
          Logout
        </a>
      </Menu.Item>
    </Menu>
  );
  const DropdownMenu = () => (
    <Dropdown key={1} overlay={menu}>
      <Avatar
        style={{ marginLeft: "5px", marginBottom: "3px" }}
        src="https://joeschmoe.io/api/v1/random"
      />
    </Dropdown>
  );
  return (
    <PageHeader
      ghost={false}
      style={styles.header}
      extra={[
        <div style={styles.profile} key={1} overlay={menu}>
          <DropdownMenu key={1} />
          <span style={styles.profileName} key={2}>
            {userName}
          </span>
        </div>,
      ]}
    />
  );
}
