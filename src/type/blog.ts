import { Options } from "@contentful/rich-text-react-renderer";

export interface IBlogs { 
    sys: { id:  number | null | undefined; }; 
    fields: {
        title: string;  
        slug: string;
        image: { fields: 
            { file: 
                { url: string; }; 
            }; 
        }; 
       
    }
}