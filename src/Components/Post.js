import React, { useCallback, useContext, useState } from 'react';
import '../Style/Post.scss';
import axios from 'axios';
import Forum from './Forum';
import { UserContext } from '../App';
import checkLogo from '../svgs/checkImg.svg';
import postLogo from '../svgs/postImg.svg';

const Post = () => {
    const user = useContext(UserContext);
    const [contents, setContents] = useState("");
    const [isAnonymous, setIsAnonyMous] = useState(true);

    const onChangeContent = (e) => {
        setContents(e.target.value)
    };

    const onClickAnony = () => {
        setIsAnonyMous(isAnonymous => !isAnonymous)
    };

    const onSubmit = useCallback(async (e) => {
        e.preventDefault();

        if (!user.isLogin) {
            alert('로그인 상태를 확인할 수 없습니다. 로그인 후에 글을 작성하실 수 있습니다.')
            return;
        }

        if (!contents) {
            alert('내용이 비어있습니다. 제보 내용을 다시 한 번 확인해주세요.')
            return;
        }

        try {
            await axios.post(
                process.env.REACT_APP_BOARD_URL,
                {
                    contents: contents,
                    Usercode: user.code,
                    isAnonymous: isAnonymous
                }
            );

            alert('제보가 접수 되었습니다. 관리자 승인 후 목록에 표시됩니다.')
        } catch (err) {
            alert('오류가 발생하였습니다.');
        }

    }, [user, contents, isAnonymous]);

    return (
        <form onSubmit={onSubmit}>
            <div className='article_wrap'>
                <div className='article_box'>
                    <div className='post_title_box'>
                        <h1 className='post_title'>제보하기</h1>
                        <div className='form_boxs'>
                            <div className='posts-wrap'>
                                <div className='anony-button-wrap'>
                                    <span className='anony_button_span' onClick={onClickAnony}>익명</span>
                                    {isAnonymous ?
                                        (<button type='button' className='anony-button' onClick={onClickAnony} style={{ backgroundColor: '#238636' }}>
                                            <img src={checkLogo} alt='check' />
                                        </button>)
                                        :
                                        (<button type='button' className='anony-button' onClick={onClickAnony} style={{ backgroundColor: 'transparent' }}>
                                            &nbsp;
                                        </button>)}
                                </div>
                                <div className='post-button-wrap'>
                                    <button type='submit' id='post' className='post_button' >
                                        <img src={postLogo} alt='' />
                                        <span>게시</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='editor_box'>
                        <textarea
                            className='editor'
                            onChange={onChangeContent}
                            disabled={!user.isLogin}
                            placeholder={!user.isLogin ? '로그인 후 글을 작성하실 수 있습니다.' : ''} />
                    </div>
                    <Forum />
                </div>
            </div>
        </form >
    );
};

export default Post;