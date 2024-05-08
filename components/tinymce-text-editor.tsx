import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
// import { Controller } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export const TinymceTextEditor = ({defaultValues}:any) => {
    return (
        <>
        <div>
            <Editor
                apiKey={process.env.TINY_MCE_API_KEY}
                //onInit={(_evt, editor) => editorRef.current = editor}
                initialValue={defaultValues}
                init={{
                    branding: false,
                    height: 500,
                    menubar: true,
                    plugins: [
                        "image",
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "code",
                        "help",
                        "wordcount",
                        "anchor",
                    ],
                    toolbar: "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
            </div>
        </>
    )
}


