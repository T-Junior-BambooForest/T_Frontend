import React, { useCallback, useContext, useState } from 'react';
import '../Style/Post.scss';
import axios from 'axios';
import Forum from './Forum';
import { UserContext } from '../App';

const Post = () => {
    const user = useContext(UserContext);
    const [content, setContent] = useState("");
    const [anony, setAnony] = useState(true);

    const onChangeContent = (e) => {
        setContent(e.target.value)
    };

    const onClickAnony = () => {
        setAnony(anony => !anony)
    };

    const onSubmit = useCallback((e) => {
        e.preventDefault();

        if (!user.isLogin) {
            alert('로그인 상태를 확인할 수 없습니다. 로그인 후에 글을 작성하실 수 있습니다.')
        } else {
            if (!content) {
                alert('내용이 비어있습니다. 제보 내용을 다시 한 번 확인해주세요.')
            } else {
                axios
                    .post(
                        process.env.REACT_APP_BOARD_URL,
                        {
                            contents: content,
                            Usercode: user.code,
                            isAnonymous: anony
                        }
                    )
                    .then(() => {
                        alert('제보가 접수 되었습니다. 관리자 승인 후 목록에 표시됩니다.')
                        window.location.reload('/');
                    })
                    .catch((error) => {
                        alert(`에러가 발생하였습니다. ${error}`);
                        window.location.reload('/');
                    })
            }
        }
    }, [user, content, anony]);

    return (
        <form onSubmit={onSubmit}>
            <div className='article_wrap'>
                <div className='article_box'>
                    <div className='post_title_box'>
                        <h1 className='post_title'>제보하기</h1>
                        <div className='form_boxs'>
                            <div>
                                <div className='anony-button-wrap' style={{ marginRight: '20px' }}>
                                    <span className='anony_button_span' onClick={onClickAnony} style={{ marginRight: '5px' }}>익명</span>
                                    {anony ? (<button type='button' onClick={onClickAnony} style={{ backgroundColor: '#238636', border: '1px solid #30363D', width: '20px', height: '20px', borderRadius: '6px' }}><svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.73549 0.219934C9.80374 0.1503 9.88519 0.0949814 9.97508 0.0572166C10.065 0.0194519 10.1615 0 10.259 0C10.3565 0 10.453 0.0194519 10.5429 0.0572166C10.6328 0.0949814 10.7142 0.1503 10.7825 0.219934C11.0685 0.508934 11.0725 0.975934 10.7925 1.26993L4.87949 8.25993C4.81236 8.33366 4.73089 8.3929 4.64007 8.43406C4.54925 8.47521 4.45099 8.4974 4.3513 8.49927C4.25161 8.50115 4.15258 8.48266 4.06028 8.44495C3.96798 8.40723 3.88435 8.35108 3.81449 8.27993L0.216492 4.63393C0.077729 4.49242 0 4.30213 0 4.10393C0 3.90574 0.077729 3.71545 0.216492 3.57393C0.284738 3.5043 0.36619 3.44898 0.45608 3.41122C0.54597 3.37345 0.642491 3.354 0.739992 3.354C0.837493 3.354 0.934014 3.37345 1.0239 3.41122C1.11379 3.44898 1.19525 3.5043 1.26349 3.57393L4.31549 6.66693L9.71549 0.241934C9.72171 0.234206 9.72839 0.226859 9.73549 0.219934Z" fill="white" />
                                    </svg>
                                    </button>)
                                        : (<button type='button' onClick={onClickAnony} style={{ backgroundColor: 'transparent', border: '1px solid #30363D', width: '20px', height: '20px', borderRadius: '6px' }}>&nbsp;</button>)}
                                </div>
                                {/* <input type='file' className='image-file' accept="image/png, image/jpeg" /> */}
                            </div>
                            <button type='submit' id='post' className='post_button' >
                                <svg width="10" height="10" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.33333 17.5C3.39976 17.5081 3.46691 17.5081 3.53333 17.5L6.86667 16.6667C7.01454 16.6316 7.14998 16.5566 7.25833 16.45L17.5 6.17504C17.8104 5.86277 17.9847 5.44035 17.9847 5.00004C17.9847 4.55973 17.8104 4.13731 17.5 3.82504L16.1833 2.50004C16.0285 2.34508 15.8447 2.22215 15.6424 2.13828C15.4401 2.0544 15.2232 2.01123 15.0042 2.01123C14.7851 2.01123 14.5683 2.0544 14.3659 2.13828C14.1636 2.22215 13.9798 2.34508 13.825 2.50004L3.58333 12.7417C3.47566 12.8506 3.39812 12.9855 3.35833 13.1334L2.525 16.4667C2.49505 16.5745 2.48712 16.6873 2.50169 16.7982C2.51626 16.9092 2.55303 17.0161 2.6098 17.1125C2.66658 17.209 2.74219 17.293 2.83214 17.3595C2.92209 17.4261 3.02452 17.4739 3.13333 17.5C3.19976 17.5081 3.26691 17.5081 3.33333 17.5ZM15 3.67504L16.325 5.00004L15 6.32504L13.6833 5.00004L15 3.67504ZM4.925 13.7584L12.5 6.17504L13.825 7.50004L6.24167 15.0834L4.48333 15.5167L4.925 13.7584Z" fill="#E5EDF5" />
                                </svg>
                                <span style={{ marginLeft: '4px' }}>게시</span>
                            </button>
                        </div>
                    </div>
                    <div className='editor_box'>
                        <textarea className='editor' onChange={onChangeContent} />
                    </div>
                    <Forum
                    />
                </div>
            </div>
        </form >
    );
};

export default Post;