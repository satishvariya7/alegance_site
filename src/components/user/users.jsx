import React, { useEffect, useState } from "react";
import { Breadcrumb, List, Table } from "antd";
import Sidebar from "../sidebar/sidebar";
import Header from "../header/header";
import { HomeOutlined } from "@ant-design/icons";
import axios from "axios";

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
export default function Users() {
  const [userData, setUserData] = useState(null);
  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Email", dataIndex: "email", key: "email" },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: () => <a>Delete</a>,
    },
  ];
  const data = [
    {
      key: 1,
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      description:
        "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
    },
    {
      key: 2,
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      description:
        "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.",
    },
    {
      key: 3,
      name: "Not Expandable",
      age: 29,
      address: "Jiangsu No. 1 Lake Park",
      description: "This not expandable",
    },
    {
      key: 4,
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      description:
        "My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.",
    },
  ];
  useEffect(function () {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (res.data) {
          let data = [];
          for (let index = 0; index < res.data.length; index++) {
            data.push({
              key: index,
              name: res.data[index].name,
              age: 32,
              email: res.data[index].email,
              address: `${res.data[index].address.street}, ${res.data[index].address.suite}, ${res.data[index].address.city}`,
            });
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
                <Breadcrumb.Item>Users</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              <h1>ELEGANCE Users</h1>
            </div>
            <Table
              columns={columns}
              pagination={{ pageSize: 5 }}
              expandable={{
                expandedRowRender: (record) => (
                  <p style={{ margin: 0 }}>{record.address}</p>
                ),
                rowExpandable: (record) => record.name !== "Not Expandable",
              }}
              dataSource={userData}
            />
          </div>
        </div>
      </div>
    </>
  );
}
