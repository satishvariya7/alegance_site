import React, { useEffect, useState } from "react";
import { Breadcrumb, Card, Col, Row } from "antd";
import Sidebar from "../sidebar/sidebar";
import Header from "../header/header";
import { HomeOutlined } from "@ant-design/icons";
import axios from "axios";
import { useParams } from "react-router-dom";

const styles = {
  breadcrumb: {
    borderBottom: "1px solid #8c8c8c",
  },
  contentBody: {
    padding: "11px",
  },
  crumb: {
    marginBottom: "8px",
  },
};
export default function AlbumDetails() {
  const [userData, setUserData] = useState(null);
  const { albumId, userId } = useParams();

  useEffect(function () {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((res) => {
        if (res.data) {
          setUserData(res.data);
        }
      })
      .catch((err) => {});
  }, []);
  const { Meta } = Card;
  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ width: "20%" }}>
          <Sidebar defaultSelectedKey={"2"} />
        </div>
        <div style={{ width: "80%" }}>
          <Header />
          <div style={styles.contentBody}>
            <div style={styles.breadcrumb}>
              <Breadcrumb style={styles.crumb}>
                <Breadcrumb.Item href="/">
                  <HomeOutlined />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="/users">
                  <span>Users</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item href={`/user/album/${userId}`}>
                  <span>Album</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Album Details</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              <div className="site-card-wrapper">
                <Row gutter={16}>
                  {userData &&
                    userData.map((item, index) => {
                      return (
                        <Col span={8}>
                          <Card
                            key={index}
                            hoverable
                            style={{ width: 300 }}
                            cover={
                              <img
                                alt="example"
                                //src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                                src={item.url}
                              />
                            }
                          >
                            <Meta
                              title={item.title}
                              description="www.instagram.com"
                            />
                          </Card>
                        </Col>
                      );
                    })}

                  {/* <Col span={8}>
                    <Card title="Card title" bordered={false}>
                      Card content
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card title="Card title" bordered={false}>
                      Card content
                    </Card>
                  </Col> */}
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
