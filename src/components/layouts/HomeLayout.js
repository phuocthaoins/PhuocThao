import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Outlet, Link } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `Báo cáo doanh thu tháng ${key}`,
}));

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
                  label: "Go to UserLayout",
                },
                {
                  key: "3",
                  icon: <Link to="user/asset" />,
                  label: "Go to Setup Database",
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
