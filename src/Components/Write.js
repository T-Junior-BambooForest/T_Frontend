import React, { useState, useRef } from 'react';
import '../Styles/Write.css';
import '../Styles/editor.css';
import Forum from './Forum';
import { Editor } from '@tinymce/tinymce-react';

const Write = () => {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };

    const [items, setItems] = useState(
        [
            {
                id: 0,
                text: 'Hello, My name is Park Ubin. I am frontend Developer.',
                name: 'Park Ubin',
                date: '2022-09-01',
                profileImg: '/images/picture.png',
            },
            {
                id: 1,
                text: "hihi",
                name: '박우빈',
                date: '2022-01-31',
                profileImg: '/images/ForumTitleBlack.png',
            },
            {
                id: 2,
                text: "Just Longer letter Just Longer letter Just Longer letter Just Longer letter Just Longer letter Just Longer letter Just Longer letter Just Longer letter Just Longer letter Just Longer letter Just Longer letter Just Longer letter Just Longer letter Just Longer letter Just Longer letter Just Longer letter ",
                name: 'Hello World',
                date: '2006-03-27',
                profileImg: '/images/undefined.jpeg',
            },
            {
                id: 3,
                text: 'please',
                name: 'Image Maker',
                date: '2022-08-13',
                contentImg: '/images/picture.png',
                profileImg: '/images/undefined.jpeg',
            }
        ]
    );

    const onSubmit = e => {
        e.preventDefault();

        fetch("#", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                postId: items.id,
            }),
        }).then((res) => {
            if (res.ok) {
                alert("글 작성이 완료되었습니다.");
            }
        });
    }

    return (
        <div>
            <h1 className='post'>글 작성하기</h1>
            <div className='editorBox'>
                <Editor
                    className='editor'
                    apiKey='iple01nb1njvg519n1xm9kw2ok1gfv0u5jyx4ety2gc2ay16'
                    onInit={(evt, editor) => editorRef.current = editor}
                    init={{
                        language: 'ko_KR',
                        skin: localStorage.getItem('theme') === 'light' ? undefined : 'oxide-dark',
                        placeholder: '여기에 글을 작성해주세요!',
                        height: 200,
                        width: 865,
                        menubar: true,
                        content_css: 'body { margin: 0 auto; }',
                        plugins: [
                            'code', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'visualblocks', 'table', 'wordcount', 'codesample'
                        ],
                        toolbar: 'undo redo codesample | bold italic | alignleft alignright aligncenter alignjustify | emoticon image media | preview code',

                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px; }',
                    }}

                />
            </div>
            <div className='BtnBox'>
                <button onClick={log} className='submitBtn' >게시하기</button>
            </div>
            {
                <Forum
                    items={items}
                />
            };
        </div>
    );
};

export default Write;