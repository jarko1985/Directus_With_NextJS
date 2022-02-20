import fetchData from "../helpers/fetchData";

export const getHomePagePosts = async ()=>{
    const data = await fetchData(

        `
        query HomePagePosts{
        posts{
        id
        title
        slug
        featured_image{id}
        body
        }
        }`,{
            variables:{}
        }
    );

    return data.data.posts
}