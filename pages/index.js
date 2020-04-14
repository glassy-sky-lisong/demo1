import Button from './../components/Button'
import React from 'react'
import Link from 'next/link'
import router from 'next/router'
const Index = ()=> {
    function handleClickTabRouter() {
        router.push('/home')
    }

    function handleClickTabRouter2() {
        router.push({
            pathname:'/home',
            query: {name:zhiling}
        })
    }

    return (
        <>
            <h2>hello, next.js !</h2>
            <Button onClickButton={handleClickTabRouter}>编程式路由跳转到home</Button>
            <br/><Link href="/home"><a>跳转到home</a></Link>
            <br /><Link href={ {pathname:'/home',query:{name:'zhiling'}} }><a>withRouter是传参必须依赖</a></Link>
        </>
    )
}

export default Index