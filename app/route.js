import React from 'react'
import { Switch, Route, HashRouter, Redirect, BrowserRouter } from 'react-router-dom'
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import App from './base/Entry';
import Login from './pages/login' // 登录*/
import Register from './pages/register'// 注册


/* 进入路由的判断 */
function isLogin( nextState, replaceState ) {
    /* const token = sessionStorage.getItem( 'token' )
    if ( !token ) {
        replaceState( '/login' )
    } */
    let isHavelogin;
    const authority = sessionStorage.getItem( 'user_authority' );
    console.log( 'authority', authority )
    if ( !authority ) {
        isHavelogin = true
    } else {
        isHavelogin = false
    }
    return isHavelogin
}

export default () => (
    <LocaleProvider locale={zhCN}>
        <HashRouter >
        {/* <BrowserRouter> onEnter={isLogin} */}
        <Switch>
            {/* <div> */}
                <Route path="/login" component={Login} />
                {/* <Redirect push from="/" to="/login" /> */}
                {/* {
                    isLogin() ? <Route
                      render={() => <Redirect to={{ pathname: '/login' }} />}
                    /> : ''
                } */}
                <Route path="/register" component={Register} />
                <Route path="/" component={App} />
            {/* </div> */}
        </Switch>
        {/* </BrowserRouter> */}
        </HashRouter>
    </LocaleProvider>
)
