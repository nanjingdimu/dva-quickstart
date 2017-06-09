import React from 'react';
import './MainLayout.css';
import { Layout, Tabs ,Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'dva/router';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const TabPane = Tabs.TabPane;

function MainLayout({ children, location }) {
  return (

    <Layout>
      <Header className="header">
        <div style={{ width: '120px',height: '31px',background: 'url(/static/yay.44dd3333.jpg)',borderRadius: 6, marginTop: 16,float: 'left'}} />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >

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
            <SubMenu key="sub1" title={<span><Icon type="user" />项目规划</span>}>
              <Menu.Item key="1"><Link to="/users">用户管理</Link></Menu.Item>
              <Menu.Item key="2">规划编制</Menu.Item>
              <Menu.Item key="3">规划清单</Menu.Item>
              <Menu.Item key="4">滚动规划</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="laptop" />项目前期</span>}>
              <Menu.Item key="5">Android</Menu.Item>
              <Menu.Item key="6">IOS</Menu.Item>
              <Menu.Item key="7">微信平台</Menu.Item>
              <Menu.Item key="8">小程序</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="notification" />项目实施</span>}>
              <Menu.Item key="9">user</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" title={<span><Icon type="notification" />运营维护</span>}>
              <Menu.Item key="9">user</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" title={<span><Icon type="notification" />实物报废</span>}>
              <Menu.Item key="9">user</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
            <SubMenu key="sub6" title={<span><Icon type="notification" />综合评价</span>}>
              <Menu.Item key="9">user</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
            <SubMenu key="sub7" title={<span><Icon type="notification" />资料中心</span>}>
              <Menu.Item key="9">user</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <div style={{ margin: '12px 0' }}>
              <Tabs  type="card">
              <TabPane tab="用户管理" key="1" onChange="/users"></TabPane>
                <TabPane tab="系统管理" key="2" onChange="/users"></TabPane>
            </Tabs>
          </div>
          <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
