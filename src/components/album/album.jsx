import React, { useEffect, useState } from "react";
import { Breadcrumb, List, Table } from "antd";
import Sidebar from "../sidebar/sidebar";
import Header from "../header/header";
import { HomeOutlined } from "@ant-design/icons";
import axios from "axios";
import { Link,useParams  } from "react-router-dom";

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
export default function Album() {
  const [userData, setUserData] = useState(null);
  const { id } = useParams();
  const columns = [
    { title: "Album Name", dataIndex: "title", key: "title" },
    {
      title: "Album",
      dataIndex: "",
      key: "x",
      render: function (item) {
        return <Link to={`/user/${item.userId}/album-detail/${item.id}`}>View More</Link>;
      },
    },
  ];
  useEffect(function () {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((res) => {
        if (res.data) {
          let data = [];
          for (let index = 0; index < res.data.length; index++) {
            if (res.data[index].userId == id) {
              data.push({
                key: index,
                id: res.data[index].id,
                userId: res.data[index].userId,
                title: res.data[index].title,
              });
            }
          }
          setUserData(data);
        }
      })
      .catch((err) => {});
  }, []);
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
                <Breadcrumb.Item>Album</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              <h1>User Album</h1>
            </div>
            <Table
              columns={columns}
              pagination={{ pageSize: 5 }}
              dataSource={userData}
            />
          </div>
        </div>
      </div>
    </>
  );
}
