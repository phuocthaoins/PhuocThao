import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Outlet, Link } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
const items1 = [
  {key: "1",
  icon: <Link to="/login" />,
  label: "LOGIN"},
  {key: "2",
  icon: <Link to="/login/forget" />,
  label: "NỘI DUNG BÀI 1"},
  // {key: "3",
  // icon: <Link to="/" />,
  // label: "NỘI DUNG BÀI 3"},
]; 

export const HomeLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />

        <Menu
          theme="dark"
          mode="horizontal"
        //   defaultSelectedKeys={["2"]}
          items={items1}
        />
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
            }}
            width={200}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{
                height: "100%",
              }}
              items={[
                {
                  key: "1",
                  icon: <Link to="user" />,
                  label: "Báo cáo doanh thu hàng tháng",
                },
                {
                  key: "3",
                  icon: <Link to="user/asset" />,
                  label: "Cập nhật đơn hàng",
                },
              ]}
            />
          </Sider>

          <Outlet />
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
      </Footer>
    </Layout>
  );
};
