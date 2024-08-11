import { getBlogs } from "@/lib/blog";
import { Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Pricing from "../pricing/page";

export default async function Programs() {
  const options: Options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="my-2 text-black">{children}</p>
      ),
      [BLOCKS.HEADING_1]: (_node, children) => (
        <h1 className="my-[2.5px] md:text-3xl sm:text-2xl text-xl">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (_node, children) => (
        <h2 className="my-[2.5px] md:text-2xl sm:text-xl text-lg">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (_node, children) => (
        <h3 className="my-5 md:text-xl sm:text-lg text-base">{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (_node, children) => (
        <h4 className="my-5 md:text-lg sm:text-base text-sm">{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (_node, children) => (
        <h5 className="my-10 md:text-base sm:text-sm text-xs">{children}</h5>
      ),
      [BLOCKS.HEADING_6]: (_node, children) => (
        <h6 className="my-10 mb-20 md:text-base sm:text-sm text-xs">{children}</h6>
      ),
      [BLOCKS.OL_LIST]: (_node, children) => (
        <ol className="list-decimal ml-5">{children}</ol>
      ),
      [BLOCKS.UL_LIST]: (_node, children) => (
        <ul className="list-disc ml-5">{children}</ul>
      ),
      [BLOCKS.LIST_ITEM]: (_node, children) => (
        <li className="my-2">{children}</li>
      ),
    },
  };

  const res = await getBlogs();
  return (
    <div className="bg-gradient-to-b from-violet-600 to-indigo-600 min-h-screen pt-20 text-white">
      
      <div className="flex flex-col items-center gap-8 px-8">
        {res.map((blog: any) => (
          <div key={blog.sys.id} className="bg-white text-black rounded-lg shadow-lg p-6 w-full sm:w-2/3 flex flex-col">
            <div>

            <img
              src={blog.fields.image.fields.file.url}
              alt={blog.fields.title}
              className="w-full h-64 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-4 text-indigo-600">
              {blog.fields.title}
            </h2>
            <div className="mb-6 text-lg">
              {documentToReactComponents(blog.fields.overview, options)}
            </div>
            </div>
            <div>
              <Pricing/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
