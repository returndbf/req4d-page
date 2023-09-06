import {Navigate} from "react-router-dom";
import Main from "../pages/Main/Main.tsx";
import {Introduce} from "../pages/Introduce.tsx";
import {Example} from "../pages/Example.tsx";
import  {PartialRouterItem} from "../types";


export const router:PartialRouterItem[] = [
    {
        path:'/',
        element:<Navigate to='/docs'/>,
        key:'root'
    },
    {
        path:'/docs',
        element:<Main/>,
        key:'docs',
        children:[
            {
                path:'',
                element:<Navigate to='/docs/introduce'/>,
                key:'docsRoot'
            },
            {
                path:'',
                title:'起步',
                isTopic:true,
                key:'start'
            },
            {
                path:'/docs/introduce',
                title:'介绍',
                element:<Introduce/>,
                key:'intro'
            },
            {
                path:'/docs/example',
                title:'示例',
                element:<Example/>,
                key:'example'
            },
            {
                path:'/docs/decorator',
                title:'装饰器',
                isTopic:true,
                key:'decorator'
            },
            {
                path:'/docs/class_decorator',
                title:'类装饰器',
                element:<Example/>,
                key:'classDecorator'
            },
            {
                path:'/docs/method_decorator',
                title:'函数装饰器',
                element:<Example/>,
                key:'methodDecorator'
            }
        ]
    }
]
export const getRouterTitle = (arr: PartialRouterItem[], pathname: string): string => {
    let title = '';
    for (let i = 0; i < arr.length; i++) {
        if (pathname === arr[i].path!) {
            title = arr[i].title!;
            break;
        }
        if (arr[i].children) {
            title = getRouterTitle(arr[i].children!, pathname); // 递归调用并将结果赋值给title
            if (title !== '') {
                break;
            }
        }
    }
    return title;
};

