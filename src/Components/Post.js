import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import '../Style/Post.scss';
import Forum from './Forum';

const Post = () => {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };

    return (
        <div className='article_wrap'>
            <div className='post_title_box'>
                <h1 className='post_title'>글 작성하기</h1>
            </div>
            <div className='editor_box'>
                <Editor
                    className='editor'
                    apiKey='iple01nb1njvg519n1xm9kw2ok1gfv0u5jyx4ety2gc2ay16'
                    onInit={(evt, editor) => editorRef.current = editor}
                    init={{
                        language: 'ko_KR',
                        skin: undefined,
                        placeholder: '여기에 글을 작성해주세요!',
                        height: 200,
                        width: 1200,
                        menubar: true,
                        content_css: 'body { margin: 0 auto; }',
                        plugins: [
                            'code', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'visualblocks', 'table', 'wordcount', 'codesample'
                        ],
                        toolbar: 'undo redo codesample | bold italic | alignleft alignright aligncenter | emoticon image media ',

                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px; }',
                    }}

                />
            </div>
            <Forum />
        </div>

    );
};

export default Post;