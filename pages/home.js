import Link from 'next/link'
import {withRouter} from 'next/router'
const Home = ({router}) => {
    return (
        <>
          <h2>我是主页</h2>
          <b>{router.query.name}</b><br/>
          <Link href="/"><a>返回</a></Link>
        </>
    )
}

export default withRouter(Home)