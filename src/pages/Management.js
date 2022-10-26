import React, { useState } from 'react';
import Header from '../components/Header';
import '../Style/Management.scss';

const Management = () => {

    const [testUser] = useState(
        [
            {
                id: '1',
                text: 'sadnclacnlsacnlskcnlsaasdsklnfkldsvkldvlkdalkfdnalkasdklakdlnclksanclksnakcnsalkcnadlkcnaldkncaslkckadncalkncklascklasnclkanslkcanslkanlvnalkvnaslkvnsalkvnaslknvlkasnvlsanlk',
                isAnony: true,
                image: 'https://webisfree.com/static/uploads/2019/9866_images580.jpg'
            },
            {
                id: '2',
                text: 'saadsgdsagbdadnclacnlsacnlskcnlsaas',
                isAnony: false,
                image: ''
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
                            <td>사진</td>
                            <td>요청자</td>
                            <td colSpan={2} style={{ textAlign: 'center' }}>승인 여부</td>
                        </tr>
                        {testUser.map((user) => {
                            return (
                                <tr>
                                    <td>{user.id}</td>
                                    <td style={{ fontSize: '14px' }}>{user.text}</td>
                                    <td>{user.image ? '있음' : ''} </td>
                                    <td>{user.isAnony ? '익명' : `박우빈`}</td>
                                    <td>수락</td>
                                    <td>거절</td>
                                </tr>
                            )
                        })
                        }
                    </table>
                    <table>
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
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Management;