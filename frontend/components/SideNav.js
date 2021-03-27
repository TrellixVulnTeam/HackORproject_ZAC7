import React, { Component } from "react";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import {
  CodeOutlined,
  DesktopOutlined,
  EyeOutlined,
  QuestionOutlined
} from '@ant-design/icons';
import '../src/index.scss';

const { SubMenu } = Menu;
const { Sider } = Layout;

export default class SideNav extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => this.setState({ collapsed });

  render() {
    const { collapsed } = this.state;
    return (
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={this.onCollapse}
        width="20vw"
      >
        <img
          src="./assets/hackor.png"
          width="75"
          height="75"
          className="logo"
          key="0"
        />
        <Menu theme="dark" defaultSelectedKeys={[this.props.page]} mode="inline">
          <Menu.Item
            key="1"
            icon={<CodeOutlined />}
            onClick={this.props.onClick}
          >
            What is Blockchain
          </Menu.Item>
          <SubMenu
            key="sub1"
            icon={<DesktopOutlined />}
            title="Blockchain Technologies"
          >
            <Menu.Item key="2" onClick={this.props.onClick}>
              Hash Functions
            </Menu.Item>
            <Menu.Item key="3" onClick={this.props.onClick}>
              Public-Private Keys
            </Menu.Item>
            <Menu.Item key="4" onClick={this.props.onClick}>
              The Internet
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<EyeOutlined />} title="Blockchain Anatomy">
            <Menu.Item key="5" onClick={this.props.onClick}>Blocks</Menu.Item>
            <Menu.Item key="6" onClick={this.props.onClick}>
              Blockchains
            </Menu.Item>
            <Menu.Item key="7" onClick={this.props.onClick}>Nodes</Menu.Item>
            <Menu.Item key="8" onClick={this.props.onClick}>
              Consensus
            </Menu.Item>
          </SubMenu>
          <Menu.Item
            key="9"
            icon={<QuestionOutlined />}
            onClick={this.props.onClick}>
            Why Blockchain
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}