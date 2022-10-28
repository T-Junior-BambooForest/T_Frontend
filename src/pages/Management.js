import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import '../Style/Management.scss';

const Management = () => {

    const [post, setPost] = useState();

    const onClickUpdatePost = (e) => {
        console.log(e)
    }

    useEffect(() => {
        (async () => {
            try {
                const data = await getPostInfo();
                setPost(data.data)
                console.log(post)
            } catch (error) {
                if (error instanceof AxiosError && error.response?.status >= 400) {
                    setPost((prev) => ({ ...prev, isLogin: false }));
                }
            }
        })();
    }, []);

    const getPostInfo = () => {
        return axios.get("http://bsmboo.kro.kr:8000/board/manage", { withCredentials: true });
    };

    return (
        <div>
            {/* { ?
                <Navigate to='!' replace={true} />
                : null
            } */}

            <Header />
            <div className='management_title_box'>
                <h1 className='management_title'>
                    게시글
                </h1>
            </div>
            <div className='management_content_wrap'>
                <div className='management_content_title'>
                    <table style={{ marginBottom: '50px' }}>
                        <tr>
                            <td>글번호</td>
                            <td>글내용</td>
                            <td>요청자</td>
                            <td colSpan={2} style={{ textAlign: 'center' }}>승인 여부</td>
                        </tr>
                        {post && post.map((post) => {
                            return (
                                <tbody key={post.boardCode}>
                                    <tr>
                                        <td>{post.boardCode}</td>
                                        <td style={{ fontSize: '14px' }}>{post.contents}</td>
                                        <td>{post.isAnonymous ? '익명' : post.User.name}</td>
                                        <td onClick={() => onClickUpdatePost(post.boardCode)}>수락</td>
                                        <td>거절</td>
                                    </tr>
                                </tbody>
                            )
                        })
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Management;