
import Head from 'next/head';
import { Key, ReactChild, ReactFragment, ReactPortal } from 'react';

import {useQuery} from 'react-query';
import {getHomePagePosts} from '../queries/queries'
import PostCard from '../components/PostCard'

const Home = () => {
    const {data: posts, status, error, isFetching, isSuccess} = useQuery('posts', async () => await getHomePagePosts());

    console.log(posts)
    return (
        <div className="flex flex-row gap-5 items-center py-2 max-w-2xl mx-auto">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>


            {isSuccess && posts.map((item: { slug: Key | null | undefined; title: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; })=><PostCard title={item.title} body={item.body} image={item.featured_image.id}  key={item.slug}/>)}
    </div>
  )
}

export default Home
