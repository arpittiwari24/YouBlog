"use client"

// import {useSession} from "next-auth/react";
// import {redirect, useRouter} from "next/navigation";
import AppTest from "@/app/components/BlogEditor/App";
import React, {useState, useEffect} from "react";
// import {button} from "@/app/components/ui/button";



export default function Editor() {
    // const router = useRouter()
    //         const {data: session} = useSession({
    //         required: true,
    //         onUnauthenticated() {
    //         redirect('/signin?callbackUrl=/blog/write')
    //     }
    //     })
        const [title, setTitle] = useState<string>("");
        const [editorState, setEditorState] = useState();
        const [isbuttonEnabled, setIsbuttonEnabled] = useState<boolean>(false);
        const [isContentEntered, setIsContentEntered] = useState<boolean>(false)


     function handleEditorStateChange(newState: any) {
    setEditorState(newState);
    setIsContentEntered(Boolean(newState)); // Set isContentEntered to true if newState is not undefined
  }
  useEffect(() => {
    setIsbuttonEnabled(title.trim() !== "" && isContentEntered);
  }, [title, isContentEntered])

//   const email = session?.user?.email ?? "";

    // async function publishBlog() {
    //     const res = await fetch("http://localhost:8000/api/user/blog", {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             title: title,
    //             content: JSON.stringify(editorState),
    //             date : new Date(),
    //             tags :" test"
    //         }),
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json",
    //             email: email,
    //         }
    //     })
    //     if(res.ok) {
    //         router.push("/blog")
    //     }
    //     console.error(res)
    // }
    return(
        <>
            <div className="text-black">
                <div className="px-48 py-20">
                    <div className="container">
                        <input
                            id="title"
                            required={true}
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="py-3 px-5 block w-full text-gray-600 border border-gray-400
                            rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Title"
                        />
                    </div>

                    <div className="container mb-10">
                        <AppTest onEditorStateChange={handleEditorStateChange}/>
                    </div>

                </div>

                <div className="container mx-auto px-4 space-y-4 w-full sm:w-[850px] my-6 flex flex-col items-center">
                    <button className=" btn" disabled={!isbuttonEnabled}>Publish</button>
                </div>
            </div>
        </>
        );
}
