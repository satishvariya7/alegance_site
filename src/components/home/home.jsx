import React from "react";
import { Breadcrumb, List, Avatar, Space } from "antd";
import {
  HomeOutlined,
  MessageOutlined,
  LikeOutlined,
  StarOutlined,
} from "@ant-design/icons";
import Sidebar from "../sidebar/sidebar";
import Header from "../header/header";

const styles = {
  contentBody: {
    padding: "11px",
  },
  breadcrumb: {
    borderBottom: "1px solid #8c8c8c",
  },
  contentList: {
    padding: "11px",
  },
  crumb: {
    marginBottom: "8px",
  },
};
export default function Home() {
  const listData = [];
  for (let i = 0; i < 2; i++) {
    listData.push({
      key: i,
      href: "https://ant.design",
      title: `ant design part ${i}`,
      avatar: "https://joeschmoe.io/api/v1/random",
      description:
        "Ant Design, a design language for background applications, is refined by Ant UED Team.",
      content:
        "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
    });
  }
  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "20%" }}>
      <Sidebar defaultSelectedKey={"1"} />
      </div>
      <div style={{ width: "80%" }}>
        <Header />
        <div style={styles.contentBody}>
          <div style={styles.breadcrumb}>
            <Breadcrumb style={styles.crumb}>
              <Breadcrumb.Item href="/">
                <HomeOutlined />
              </Breadcrumb.Item>        
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div style={styles.contentList}>
            <div>
              <h1>Most Popular ELEGANCE</h1>
            </div>
            <div>
              <List
                itemLayout="vertical"
                size="large"
                dataSource={listData}
                renderItem={(item) => (
                  <List.Item
                    key={item.title}
                    actions={[
                      <IconText
                        icon={StarOutlined}
                        text="156"
                        key="list-vertical-star-o"
                      />,
                      <IconText
                        icon={LikeOutlined}
                        text="156"
                        key="list-vertical-like-o"
                      />,
                      <IconText
                        icon={MessageOutlined}
                        text="2"
                        key="list-vertical-message"
                      />,
                    ]}
                    extra={
                      <img
                        width={272}
                        alt="logo"
                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                      />
                    }
                  >
                    <List.Item.Meta
                      avatar={<Avatar src={item.avatar} />}
                      title={<a href={item.href}>{item.title}</a>}
                      description={item.description}
                    />
                    {item.content}
                  </List.Item>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
