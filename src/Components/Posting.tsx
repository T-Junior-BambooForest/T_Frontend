import React, { useCallback, useContext, useState } from 'react';
import '../Style/Post.scss';
import axios from 'axios';
import AllPost from './AllPost';
import { UserContext } from '../App';
import checkLogo from '../Image/checkImg.svg';
import postLogo from '../Image/postImg.svg';

const Post = () => {
    const user = useContext(UserContext);
    const [contents, setContents] = useState("");
    const [isAnonymous, setIsAnonyMous] = useState(true);
    const [preventMultipleClick, setPreventMultipleClick] = useState(false);
    const [imgSrc, setImgSrc]: any = useState(null);

    const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContents(e.target.value)
    };

    const onClickAnony = () => {
        setIsAnonyMous(isAnonymous => !isAnonymous)
    };

    const encodeFileToBase64 = (fileBlob: any) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
            reader.onload = () => {
                setImgSrc(reader.result);
                resolve('');
            };
        });
    };

    const onSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        setPreventMultipleClick(true);

        if (!user.isLogin) {
            alert('로그인 상태를 확인할 수 없습니다. 로그인 후에 글을 작성하실 수 있습니다.')
            setPreventMultipleClick(false);
            return;
        }

        if (!contents) {
            alert('내용이 비어있습니다. 제보 내용을 다시 한 번 확인해주세요.')
            setPreventMultipleClick(false);
            return;
        }

        try {
            await axios.post(
                '/board',
                {
                    contents,
                    Usercode: user.code,
                    isAnonymous,
                    Image: imgSrc
                }
            );
            alert('제보가 접수 되었습니다. 관리자 승인 후 목록에 표시됩니다.')
            setPreventMultipleClick(false);
            window.location.reload()
        } catch (err) {
            alert('오류가 발생하였습니다.');
            setPreventMultipleClick(false);
        }

    }, [user, contents, isAnonymous, imgSrc]);

    return (
        <form onSubmit={onSubmit}>
            <div className='article_wrap' style={localStorage.getItem('theme') === 'dark' ? null : { backgroundColor: 'white' }}>
                <div className='article_box'>
                    <div className='post_title_box'>
                        <h1 className='post_title' style={localStorage.getItem('theme') === 'dark' ? null : { color: 'black' }}>제보하기</h1>
                        <div className='form_boxs'>
                            <div className='posts-wrap'>
                                <div className='anony-button-wrap'>
                                    <input type="file" onChange={(e) => { encodeFileToBase64(e.target.files[0]); }} accept="image/png, image/gif, image/jpeg" disabled={user.isLogin} />
                                    {imgSrc ? <img src={imgSrc} alt='미리보기' className='preview-img' />
                                        : ''}
                                    <span className='anony_button_span' onClick={onClickAnony} style={localStorage.getItem('theme') === 'dark' ? null : { color: 'black' }}>익명</span>
                                    {isAnonymous ?
                                        (<button type='button' className='anony-button' onClick={onClickAnony}
                                            style={localStorage.getItem('theme') === 'dark' ? { backgroundColor: '#238636' } : { backgroundColor: '#238636', border: 'none' }}
                                        >
                                            <img src={`${checkLogo}`} alt='check' />
                                        </button>)
                                        :
                                        (<button type='button' className='anony-button' onClick={onClickAnony}
                                            style={localStorage.getItem('theme') === 'dark' ? { backgroundColor: 'transparent' } : { backgroundColor: 'transparent', border: 'none' }}
                                        >
                                            &nbsp;
                                        </button>)}
                                </div>
                                <div className='post-button-wrap'>
                                    <button type='submit' id='post' className='post_button' disabled={preventMultipleClick}
                                        style={localStorage.getItem('theme') === 'dark' ? null : { border: 'none' }}
                                    >
                                        <img src={`${postLogo}`} alt='' />
                                        <span>제보</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='editor_box'>
                        <textarea
                            style={localStorage.getItem('theme') === 'dark' ? null : { backgroundColor: 'white', border: '2px solid rgba(27,31,36,0.15)', color: 'black' }}
                            className='editor'
                            onChange={onChangeContent}
                            disabled={!user.isLogin}
                            placeholder={!user.isLogin ? '로그인 후 글을 작성하실 수 있습니다.' : ''} />
                    </div>
                    <AllPost />
                </div>
            </div>
        </form >
    );
};

export default Post;