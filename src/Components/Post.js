import React, { useCallback, useState } from 'react';
import '../Style/Post.scss';
import axios from 'axios';
import Forum from './Forum';

const Post = ({ userInfo }) => {
    const [date] = useState(new Date());
    const [isAnony, setIsAnony] = useState(true);
    const [text, setText] = useState('');
    const [postInfo, setPostInfo] = useState([
        {
            postId: 1,
            postDate: date,
            text: 'ah deu di oh da hat da!',
        },
        {
            postId: 2,
            postDate: date,
            text: 'ㄴ',
        },
        {
            postId: 3,
            postDate: date,
            text: 'ㅇㄴ머ㅜ람ㅍnaslkfnklsancaslkckasncsanlkcsanvkndabjndjbnvadlsjkcnjksfbnrwljiefdsfnbvfcjkdsfbhgkvjdhcjkldshklsahjdfldshdjlkdahjcfkashkdhsadksakjdaslkjdfhdasljkfklfjhfaskjcbvjdfslbvfajksbcvkjfsbkjsabvlkjfdsbkjldfnvkjdsancvjkfsbnvkdajvjsdlkbvjkdnvkadnbkjdflfcasjknvbklfahcxaosugvuydsghfiwrefuidlashbl fghgifdahnblfcojdblejrwopejwsoidjbnlerkjnxiadnvdsk;nvkjbfdnbjlkenfgjkdsnfkjvflnsvkjfndkbjfngfldfjc;ioadjofwirhorwiefpi;asjdcklsamvklfdbklsdaldasxlksmckdfjbnfsjklfnlskdnjsa;텀ㄴㄹ가힏버이ㅏ저이ㅏㅈㅂㄷ;ㅈㅂㄷㄴ;나;ㅣㅁ나;ㅏㅇ;낭리;ㅇ나차우파ㅣ뤂ㅇ나ㅓㅜㅁㄴ;ㅏㅜㅏㅓ',
        },
    ])

    const onClickIsAnony = useCallback(() => {
        setIsAnony(!isAnony);
    }, [isAnony])

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        isAnony ? (
            axios
                .post(
                    '/bsmboo.kro.kr/users/login',
                    { postInfo },
                    { withCredentials: true, }
                )
                .then(() => {
                    // revalidate();
                })
                .catch((error) => {
                    alert(error);
                })
        ) : (
            axios
                .post(
                    '/bsmboo.kro.kr/users/login',
                    { userInfo, postInfo },
                    { withCredentials: true, }
                )
                .then(() => {
                    // revalidate();
                })
                .catch((error) => {
                    alert(error);
                })
        )

    }, [isAnony, postInfo, userInfo]
    );

    const onChangeText = (e) => {
        setText(e.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='article_wrap'>
                <div className='article_box'>
                    <div className='post_title_box'>
                        <h1 className='post_title'>제보하기</h1>
                        <div className='form_boxs'>
                            <div>
                                <div>
                                    <span className='anony_button_span'>익명</span>
                                    {isAnony ? (<input type='button' className='anony_button' onClick={onClickIsAnony} value='✓' style={{ backgroundColor: '#238636' }} />)
                                        : (<input type='button' className='anony_button' onClick={onClickIsAnony} value=' ' style={{ backgroundColor: '#21262D' }} />)}
                                </div>
                                <input type='file' className='user__file' />
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
                        <input type='text' className='editor' onChange={onChangeText} value={text} />
                    </div>
                    <Forum
                        postInfo={postInfo}
                        userInfo={userInfo}
                    />
                </div>
            </div>
        </form>
    );
};

export default Post;