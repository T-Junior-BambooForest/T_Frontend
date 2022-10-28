import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import '../Style/Management.scss';

const Management = () => {

    const [post, setPost] = useState();

    const test = () => {
        console.log(post)
    }

    useEffect(() => {
        (async () => {
            try {
                const data = await getPostInfo();
                setPost(data)
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
            <button onClick={test}>히히 테스트버튼</button>
            <div className='management_content_wrap'>
                <div className='management_content_title'>
                    <table style={{ marginBottom: '50px' }}>
                        <tr>
                            <td>글번호</td>
                            <td>글내용</td>
                            <td>사진</td>
                            <td>요청자</td>
                            <td colSpan={2} style={{ textAlign: 'center' }}>승인 여부</td>
                        </tr>
                        {/* {post.map((post) => {
                            return (
                                <tr>
                                    <td>{user.id}</td>
                                    <td style={{ fontSize: '14px' }}>{user.text}</td>
                                    <td>{user.image ? '있음' : ''} </td>
                                    <td>{user.isAnony ? '익명' : `박우빈`}</td>
                                    <td>수락</td>
                                    <td>거절</td>
                                    <td>test</td>
                                </tr>
                            )
                        })
                        } */}
                    </table>
                    {/* <table>
                        <tr>
                            <td>사진 글번호</td>
                            <td>사진</td>
                        </tr>
                        {testUser.map((user) => {
                            return (
                                <tr>
                                    {user.image ?
                                        <>
                                            <td style={{ textAlign: 'center' }}>{user.id}</td>
                                            <td><img src={user.image} alt='Error : 올바르지 않은 href입니다.' /></td>
                                        </>
                                        :
                                        ''}
                                </tr>
                            )
                        })
                        }
                    </table> */}
                </div>
            </div>
        </div>
    );
};

export default Management;