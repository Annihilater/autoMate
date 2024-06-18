import { Form, NavLink, Outlet, useLoaderData, useSubmit} from "react-router-dom"
import "./contentList.scss"
import dayjs from "dayjs"

export const ContentList = () => {
    const contentList = useLoaderData() as ContentType[]
    const submit = useSubmit()
    return (<main className="contentList-page">
        <div className="list">
            <Form>
            <div className="border-b px-3 flex justify-between items-center">
            <input 
                name="searchWord"
                type="text" 
                placeholder="搜索..." 
                className="outline-none text-sm font-bold py-2 w-full"
                onChange={(e) => {
                    submit(e.target.form)
                }}
            />
            </div>
            {contentList.map(content => (
                <NavLink 
                   key={content.id} 
                   to={`/config/category/contentList/${content.category_id}/content/${content.id}`}
                   className={({ isActive }) => `${isActive ? "active" : ""}`}> 
                   <div className="truncate">{content.title}</div>
                   <div className="text-[10px] opacity-80 ">{dayjs(content.created_at).format("YYYY/MM/DD")}</div>
                   </NavLink>
            ))}
            </Form>
        </div>
        <div className="content">
            <Outlet />
        </div>
    </main>)
}