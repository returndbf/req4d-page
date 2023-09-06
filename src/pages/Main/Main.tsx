import {ConfigProvider, Layout} from 'antd';
import logo from "../../assets/logo.png"
import './index.css'
import {Outlet} from "react-router-dom";
import {getRouterTitle, router} from "../../router";
import  {PartialRouterItem} from "../../types";
import {useNavigate,useLocation} from "react-router-dom";
import React, {useEffect, useState} from "react";

const {Header, Content, Footer, Sider} = Layout;


const generateMenuItem = (arr:PartialRouterItem[])  => {
    let flatMenu :PartialRouterItem[] = []
    arr.forEach(r=>{
        if(r.title){
            flatMenu.push(r)
        }
        if(r.children){
            flatMenu = [...flatMenu, ...generateMenuItem(r.children)];
        }
    })
    return flatMenu

}

const MenuRender = ()=>{
    const navigate = useNavigate()
    const MenuItems = generateMenuItem(router)
   return (
       <div className={'menu-container'}>
           {
               MenuItems.map(item=>{
                   // return  <div className={item?.isTopic?'menu-topic':'menu-item'} onClick={()=>navigate(`${item.path}`)}>{item.title}</div>
                   if(item.isTopic){
                       return <div className={'menu-topic'} key={item.key}>{item.title}</div>
                   }else{
                       return <div className={'menu-item'} onClick={()=>navigate(`${item.path}`)} key={item.key}>{item.title}</div>
                   }
               })
           }
       </div>
   )
}

const Main: React.FC = () => {
    const {pathname} = useLocation();
    return (
        <ConfigProvider
            theme={{
                components: {
                    Layout: {
                        colorBgBody: 'white',
                        colorBgHeader: 'white',
                    },
                },
            }}
        >
            <Layout style={{minHeight: '100vh'}}>
                <Sider style={{borderRight:"1px solid #edf2f6"}}>
                    <div className="logo-container">
                        <img src={logo} className={'logo'}/>
                    </div>
                    <MenuRender/>
                </Sider>
                <Layout>
                    <Header style={{padding: 0}}>
                        {getRouterTitle(router, pathname)}
                    </Header>
                    <Content style={{background: "white"}}>
                        <Outlet/>
                    </Content>
                    <Footer style={{textAlign: 'center'}}></Footer>
                </Layout>
            </Layout>
        </ConfigProvider>
    );
};

export default Main;