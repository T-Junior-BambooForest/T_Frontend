import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Header from '../Header';
import '../../Style/Management.scss';

const Management = () => {
    const isManager = true;
    const [testUser, setTestUser] = useState(
        [
            {
                id: '1',
                text: 'sadnclacnlsacnlskcnlsaasdsklnfkldsvkldvlkdalkfdnalkasdklakdlnclksanclksnakcnsalkcnadlkcnaldkncaslkckadncalkncklascklasnclkanslkcanslkanlvnalkvnaslkvnsalkvnaslknvlkasnvlsanlk',
                isAnony: true,
            },
            {
                id: '2',
                text: 'saadsgdsagbdadnclacnlsacnlskcnlsaas',
                isAnony: false,
            },
            {
                id: '3',
                text: 'sadnclacnlsacasdvasdbsdabvdavjdabkvjabsjkvbsakjvbaskjvbjkasvn jkasnvkjadnvjkadnkjvadvnlskcnlsaas',
                isAnony: false,
            },
            {
                id: '4',
                text: 'sadnclacnlsacnlsk',
                isAnony: true,
                image: '/images/picture.png',
            },
            {
                id: '5',
                text: 'sadnclacnlsacnlskcnlsaasdsklnfkldsvkldvlkdalkfdnalkasdklakdlnclksanclksnakcnsalkcnadlkcnaldkncaslkckadncalkncklascklasnclkanslkcanslkanlvnalkvnaslkvnsalkvnaslknvlkasnvlsanlk',
                isAnony: true,
            },
            {
                id: '6',
                text: 'saadsgdsagbdadnclacnlsacnlskcnlsaas',
                isAnony: false,
            },
            {
                id: '7',
                text: 'sadnclacnlsacasdvasdbsdabvdavjdabkvjabsjkvbsakjvbaskjvbjkasvn jkasnvkjadnvjkadnkjvadvnlskcnlsaas',
                isAnony: false,
            },
            {
                id: '8',
                text: 'sadnclacnlsacnlsk',
                isAnony: true,
                image: '/images/picture.png',
            },
            {
                id: '9',
                text: 'sadnclacnlsacnlskcnlsaasdsklnfkldsvkldvlkdalkfdnalkasdklakdlnclksanclksnakcnsalkcnadlkcnaldkncaslkckadncalkncklascklasnclkanslkcanslkanlvnalkvnaslkvnsalkvnaslknvlkasnvlsanlk',
                isAnony: true,
            },
            {
                id: '10',
                text: 'saadsgdsagbdadnclacnlsacnlskcnlsaas',
                isAnony: false,
            },
            {
                id: '11',
                text: 'sadnclacnlsacasdvasdbsdabvdavjdabkvjabsjkvbsakjvbaskjvbjkasvn jkasnvkjadnvjkadnkjvadvnlskcnlsaas',
                isAnony: false,
            },
            {
                id: '12',
                text: 'sadnclacnlsacnlsk',
                isAnony: true,
                image: '/images/picture.png',
            },
        ]
    )

    const onClickTextDetail = (e) => {
        alert(e.target.value)
    }

    return (
        <div>
            {!isManager ?
                <Navigate to='!' replace={true} />
                : null
            }
            <Header />
            <div className='management_title_box'>
                <h1 className='management_title'>
                    게시글
                </h1>
            </div>
            <div className='management_content_wrap'>
                <div
                    className='management_content_box' >
                    <div className='management_id_box'>
                        <span className='management_id'>아이디</span>
                    </div>
                    <div className='management_text_box'>
                        <span className='management_text'>
                            게시글
                        </span>
                        <button className='text_detail_btn_preview' ></button>
                        <div className='custome_line' />
                        <span className='management_isAnony_preview'>익명여부</span>
                        <div className='custome_line' />
                        <img src='/images/picture.png' alt='images' className='img_preview' />
                        <div className='custome_line' />
                        <button className='accept_btn_preview'>수락 여부</button>
                        <button className='reject_btn_preview'></button>

                    </div>
                </div>

            </div>
            <div className='management_content_wrap'>
                {testUser.map((user) => {
                    return (
                        <div key={user.id}
                            className='management_content_box' >
                            <div className='management_id_box'>
                                <span className='management_id'>{user.id}</span>
                            </div>
                            <div className='management_text_box'>
                                <span className='management_text'>{
                                    user.text.length > 75 ? user.text.slice(0, 75) + ' ...'
                                        :
                                        user.text
                                }
                                </span>
                                <button className='text_detail_btn' onClick={onClickTextDetail} value={user.text}>보기</button>
                                <div className='custome_line' />
                                <span className='management_isAnony'>{user.isAnony ? '익명' : '비익명'}</span>
                                <div className='custome_line' />
                                <img src='/images/picture.png' alt='images' className='img_preview' />
                                <div className='custome_line' />
                                <button className='accept_btn'>수락</button>
                                <div className='custome_line' />
                                <button className='reject_btn'>거절</button>

                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    );
};

export default Management;