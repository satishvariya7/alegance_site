import React, { useEffect, useState } from "react";
import { Breadcrumb, List, Table } from "antd";
import Sidebar from "../sidebar/sidebar";
import Header from "../header/header";
import { HomeOutlined } from "@ant-design/icons";
import axios from "axios";
import { Link } from "react-router-dom";

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
    { title: "Phone", dataIndex: "phone", key: "phone" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Website", dataIndex: "website", key: "website" },
    {
      title: "Album",
      dataIndex: "",
      key: "x",
      render: function(item){        
        return <Link to={`/user/album/${item.id}`}>View</Link>
      }
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
              id:res.data[index].id,
              name: res.data[index].name,
              phone: res.data[index].phone,
              email: res.data[index].email,
              website: res.data[index].website,
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
