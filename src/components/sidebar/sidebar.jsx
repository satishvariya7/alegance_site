import React, { useState } from "react";
import { Menu, Image, Row, Col } from "antd";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

const styles = {
  menuCollapse: {
    textAlign: "center",
  },
  title: {
    margin: "0px",
  },
  titleImage: {
    width: "50px",
    borderRadius: "50%",
    padding:"5px"        
  },
};

export default function Sidebar({defaultSelectedKey}) {
  return (
    <div>
      <div style={styles.menuCollapse}>
        <Row style={{"cursor":"pointer"}}>
          <Col span={5}>
            <Image
              preview={false}
              style={styles.titleImage}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </Col>
          <Col span={19}>
            <h1 style={styles.title}>Nivaan Elegance</h1>
          </Col>
        </Row>
        {/* <Button
          type="primary"
          onClick={toggleCollapsed}
          style={styles.collapseButton}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
          )}
        </Button> */}
      </div>
      <Menu
        defaultSelectedKeys={[defaultSelectedKey]}
        defaultOpenKeys={["sub1", "sub2", "sub3"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={false}
      >
        <Menu.Item key="1" icon={<PieChartOutlined />}>
        <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>          
          <Link to="/users">Users</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<ContainerOutlined />}>
          List Of Sites
        </Menu.Item>
        <SubMenu key="sub1" icon={<MailOutlined />} title="Amenities">
          <Menu.Item key="4">Intersecting Linear Parks</Menu.Item>
          <Menu.Item key="5">Swimming Pool</Menu.Item>
          <Menu.Item key="6">Children’s Play Area</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="List Of Projects">
          <Menu.Item key="7">Projects</Menu.Item>
          <SubMenu key="sub3" title="Site Project">
            <Menu.Item key="8">View Project</Menu.Item>
            <Menu.Item key="9">Dark Theme Project</Menu.Item>            
          </SubMenu>
        </SubMenu>
      </Menu>
    </div>
  );
}
