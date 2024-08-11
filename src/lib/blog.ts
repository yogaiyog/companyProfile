const base_url = "https://cdn.contentful.com"
const space_id = "9jjc2syr1xnx"
const token = "KxDCkAre-YPxTvQfdRtxab9fOzFVs86LI-5ktFRDetU"

import { IBlogs } from '@/type/blog'
import resolveResponse from 'contentful-resolve-response'


export const getBlogs = async () => {
    const res = await fetch(`${base_url}/spaces/${space_id}/environments/master/entries?access_token=${token}&content_type=programs&include=10`, { next: {  revalidate: 10 } })
    const data = await res.json()

    const response = {
        items: data.items,
        includes: data.includes
    };
      
    const items = resolveResponse(response)

    return items
}



export const generateStaticParams = async () => {
    const users = await getBlogs();
  
    const res = users.map((blog: IBlogs) => ({
      params: {
        slug:blog.fields.slug,
      },
    }));
    return;
  };