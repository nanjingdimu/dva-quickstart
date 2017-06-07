import React from 'react';
import './MainLayout.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'dva/router';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function MainLayout({ children, location }) {
  return (

    <Layout>
      <Header className="header">
        <div style={{ width: 120,height: 31,background: '#333',borderRadius: 6, margin: '16 28 16 0',float: 'left'}} />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">首页</Menu.Item>
          <Menu.Item key="2">更换皮肤</Menu.Item>
          <Menu.Item key="3">切换视图</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: '#fff' }} >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu key="sub1" title={<span><Icon type="user" />系统管理</span>}>
              <Menu.Item key="1"><Link to="/users">用户管理</Link></Menu.Item>
              <Menu.Item key="2">权限管理</Menu.Item>
              <Menu.Item key="3">菜单管理</Menu.Item>
              <Menu.Item key="4">角色管理</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="laptop" />移动平台</span>}>
              <Menu.Item key="5">Android</Menu.Item>
              <Menu.Item key="6">IOS</Menu.Item>
              <Menu.Item key="7">微信平台</Menu.Item>
              <Menu.Item key="8">小程序</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="notification" />业务系统</span>}>
              <Menu.Item key="9">user</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
