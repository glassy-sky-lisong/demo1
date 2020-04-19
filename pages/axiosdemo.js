import React from 'react';
import Axios from 'axios';
import {withRouter} from 'next/router'

const Axiosdemo = ({router}) => {

    return (
        <>
           <p>hello,world !</p>
           <p>{this}</p>
        </>
    )
}

Axiosdemo.getInitialProps = async () => {
    const promise = new Promise((resolve) => {
        Axios('https://www.fastmock.site/mock/2b40d453b0b038333441be8a6cb43f0b/list1/getdata')
        .then((res)=>{
            console.log("远程数据结果",res);                
            resolve(res.data.data)
        })
    })

    return await promise
}




export default withRouter(Axiosdemo)