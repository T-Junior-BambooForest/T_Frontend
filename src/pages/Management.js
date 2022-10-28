import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import '../Style/Management.scss';

const Management = () => {

    const [post, setPost] = useState();

    const onClickUpdatePost = (code, index) => {
        axios
            .post(
                'http://bsmboo.kro.kr:8000/board/update',
                {
                    boardCode: code,
                }
            )
            .then(() => {
                alert('글이 승인되었습니다.')
                post.splice(index, 1)
                window.location.reload('/management');
            })
            .catch((error) => {
                alert(`에러가 발생하였습니다. ${error}`);
                window.location.reload('/management');
            })
    }

    const onClickDeletePost = (code) => {
        axios
            .delete(
                'http://bsmboo.kro.kr:8000/board',
                {
                    data: {
                        boardCode: code,
                    },
                }
            )
            .then(() => {
                alert('글이 삭제되었습니다.')
                window.location.reload('/management');
            })
            .catch((error) => {
                alert(`에러가 발생하였습니다. ${error}`);
                window.location.reload('/management');
            })
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
                        {post && post.map((post, index) => {
                            return (
                                <tbody key={post.boardCode}>
                                    <tr>
                                        <td>{post.boardCode}</td>
                                        <td style={{ fontSize: '14px' }}>{post.contents}</td>
                                        <td>{post.isAnonymous ? '익명' : post.User.name}</td>
                                        <td onClick={() => onClickUpdatePost(post.boardCode)} style={{ cursor: 'pointer' }} >수락</td>
                                        <td onClick={() => onClickDeletePost(post.boardCode, index)} style={{ cursor: 'pointer' }}>거절</td>
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