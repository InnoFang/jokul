/**
 * Created by InnF on 2018/5/2.
 */

import React from 'react'
import {
    Row,
    Col,
    Modal,
    Tabs,
    Icon,
    Menu,
    message,
    Button,
    Form
} from 'antd';

import './header.css'

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            current: 'home',
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            userid: 0
        }
    }

    setModalVisible(value) {
        this.setState({modalVisible: value});
    };

    handleClick(e) {
        this.setState({
            current: e.key,
        });
        if ('register' === e.key) {
            this.setModalVisible(true);
        }
    }

    render() {
        return (
            <header className="App-header">
                <Row>
                    <Col span={2}/>
                    <Col span={4}>
                        <a href="/" id="logo">
                            <img src={require('../images/logo.png')} alt="logo"/>
                            <span>knock-knock</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="home">
                                <Icon type="home"/>主页
                            </Menu.Item>
                            <Menu.Item key="app">
                                <Icon type="profile" />分类检索
                            </Menu.Item>
                            <Menu.Item key="user">
                                <Icon type="user" />个人中心
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={2}/>
                </Row>
                <br/>
                <Row >
                    <Col span={24}>
                        <div id="title">
                            <h1>Knock Knock</h1>
                            <p>A movie site built by spring boot and react.js</p>
                        </div>

                    </Col>
                </Row>
                <br/>
            </header>
        )
    }
}

export default Header;