import React, { useEffect, useState } from "react";
import { PageHeader, Button, Menu, Dropdown, Image, Avatar } from "antd";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/Action/action";

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
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.userState);
  useEffect(() => {
    const userName = localStorage.getItem("username");
    setUserName(userName);
    dispatch(setUser({name:'Satish Variya',address:"Katmandu"}))
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
        <Link to="/">Logout</Link>
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
            {/* {userName} */}
            {myState.user.name}
          </span>
        </div>,
      ]}
    />
  );
}
