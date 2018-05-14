/**
 * Created by InnF on 2018/5/2.
 */

import React from 'react'
import {
    Row,
    Col,
    Menu,
    Icon,
    Tabs,
    message,
    Form,
    Input,
    Button,
    Dropdown,
    Modal
} from 'antd';
import {
    Link
} from 'react-router-dom'

import './header.css'
import Api from '../Api'
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            current: 'unknown',
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            username: '',
            signInLoading: false,
            signUpLoading: false,
        }
    }

    componentWillMount() {
        if (localStorage.username !== '') {
            this.setState({
                hasLogined: true,
                username: localStorage.username
            });
        }
    };

    setModalVisible(value) {
        this.setState({modalVisible: value});
    };

    handleMenuClick(e) {
        this.setState({
            current: e.key,
        });
    }

    handleButtonClick(e) {
        this.setModalVisible(true);
    }

    handleSignIn(e) {
        //页面开始向 API 进行提交数据
        e.preventDefault();

        this.setState({signInLoading: true});
        const formData = this.props.form.getFieldsValue();
        // console.log(formData);
        const username = formData.username;
        const password = formData.password;

        if (username === null || password === null) {
            message.warning("信息不能为空");
            this.setState({signUpLoading: false});
            return;
        }
        fetch(Api.userSignIn(username, password), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: 'cors'
        }).then(response => response.json())
            .then(info => {
                if (info.status !== 1) {
                    message.error("登录失败，请检查用户名或密码是否正确");
                    console.log(`error message: ${info.msg}`);
                } else {
                    message.success("登录成功");
                    this.setState({username});
                    localStorage.username = username;
                    if (this.state.action === "login") {
                        this.setState({hasLogined: true});
                    }
                    this.setModalVisible(false);
                }
                this.setState({signInLoading: false});
            })
    };

    handleSignUp(e) {
        e.preventDefault();
        this.setState({signUpLoading: true});
        const formData = this.props.form.getFieldsValue();
        console.log(formData);
        const username = formData.r_username;
        const password = formData.r_password;
        const confirmPassword = formData.r_confirmPassword;
        if (username === null || password === null || confirmPassword === null) {
            message.warning("信息不能为空");
            this.setState({signUpLoading: false});
            return;
        }
        if (password !== confirmPassword) {
            message.warning("两次密码不相同");
            this.setState({signUpLoading: false});
            return;
        }
        fetch(Api.userSignUp(username, password), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
        }).then(response => response.json())
            .then(info => {
                if (info.status !== 1) {
                    message.error("注册失败");
                    console.log(`error message: ${info.msg}`);
                } else {
                    message.success("已注册，登录成功");
                    this.setState({username});
                    localStorage.username = username;
                    if (this.state.action === "login") {
                        this.setState({hasLogined: true});
                    }
                    this.setModalVisible(false);
                }
                this.setState({signUpLoading: false});
            });

    }

    logout() {
        localStorage.username = '';
        this.setState({hasLogined: false});
    };

    render() {

        const menu = (<Menu>
            <Menu.Item>
                <Button icon="logout" type="dashed" size="small" onClick={this.logout.bind(this)}>退出登录</Button>
            </Menu.Item>
        </Menu>);

        let {getFieldDecorator} = this.props.form;
        const userShow = this.state.hasLogined
            ?
            <Dropdown overlay={menu} placement="topCenter">
                <Button className="user" icon="user" type="primary" htmlType="button" size="large">
                    {this.state.username} <Icon type="down"/>
                </Button>
            </Dropdown>
            :
            <Button className="user" icon="user" type="primary" htmlType="button" ghost
                    onClick={this.handleButtonClick.bind(this)}>登录/注册</Button>;

        return (
            <header>
                <Row>
                    <Col span={3}/>
                    <Col span={3}>
                        <a href="/" id="logo">
                            <img src={require('../images/logo.png')} alt="logo"/>
                            <span>JOKUL</span>
                        </a>
                    </Col>
                    <Col span={4}>
                        <Menu
                            onClick={this.handleMenuClick.bind(this)}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                            style={{lineHeight: '64px'}}>
                            <Menu.Item key="home">
                                <Link to={'/'}/><Icon type="home"/>主页
                            </Menu.Item>
                            <Menu.Item key="app">
                                <Icon type="profile"/>分类检索
                                <Link to={'/category'}/>
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={10}/>
                    <Col span={2}>
                        {userShow}
                    </Col>
                    <Col span={3}/>
                </Row>
                <Modal title="用户中心"
                       wrapClassName="vertical-center-modal"
                       visible={this.state.modalVisible}
                       onCancel={() => this.setModalVisible(false)}
                       onOk={() => this.setModalVisible(false)}
                       cancelText="取消"
                       okText="关闭">
                    <Tabs type="card">
                        <TabPane tab="登录" key="1">
                            <Form horizontal onSubmit={this.handleSignIn.bind(this)} className="login-form">
                                <FormItem label="用户名">
                                    {getFieldDecorator('username', {
                                        rules: [{ required: true, message: '请输入你的用户名！' }],
                                    })(
                                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                                    )}
                                </FormItem>
                                <FormItem label="密码">
                                    {getFieldDecorator('password', {
                                        rules: [{ required: true, message: '请输入你的密码！' }],
                                    })(
                                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                                    )}
                                </FormItem>
                                <Button type="primary" htmlType="submit" loading={this.state.signInLoading} className="login-form-button">登录</Button>
                            </Form>
                        </TabPane>

                        <TabPane tab="注册" key="2">
                            <Form horizontal="true" onSubmit={this.handleSignUp.bind(this)}  className="login-form">
                                <FormItem label="用户名">
                                    {getFieldDecorator('r_username', {
                                        rules: [{ required: true, message: '请输入你的用户名！' }],
                                    })(
                                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                                    )}
                                </FormItem>
                                <FormItem label="密码">
                                    {getFieldDecorator('r_password', {
                                        rules: [{ required: true, message: '请输入你的密码！' }],
                                    })(
                                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                                    )}
                                </FormItem>
                                <FormItem label="确认密码">
                                    {getFieldDecorator('r_confirmPassword', {
                                        rules: [{
                                            required: true, message: '请确认你的密码'}]
                                        })(
                                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="再次输入密码"/>
                                    )}
                                </FormItem>
                                <Button type="primary" htmlType="submit" loading={this.state.signUpLoading}  className="login-form-button">注册</Button>
                            </Form>
                        </TabPane>
                    </Tabs>
                </Modal>
                <br/>
                <br/>
            </header>
        )
    }
}

export default Header = Form.create({})(Header);