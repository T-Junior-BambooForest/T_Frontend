import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import Header from '../Components/Header';
import useDidMountEffect from '../hooks/useDidMountEffect';
import '../Style/Freshman.scss';

const NewSignup = () => {
    const [id, setID] = useState('');
    const [password, setPassword] = useState('');
    const [isPassword, setIsPassword] = useState('');
    const [name, setName] = useState('');
    const [correct, setCorrect] = useState(true);
    const navigate = useNavigate();
    const user = useContext(UserContext);

    const onClickCheckLogin = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        axios.post('/localLogin/register', {
            id,
            password,
            name
        }).then((res) => {
            alert('회원가입 신청이 완료되었습니다. 관리자에게 문의 바랍니다.')
            window.location.reload();
            navigate('/')
        }).catch((err) => {
            if (err.code === "ERR_NETWORK") {
                alert('회원가입 신청이 완료되었습니다. 관리자에게 문의 바랍니다.')
                navigate('/')
                window.location.reload();
            } else {
                alert('회원가입에 실패했습니다. 자세한 사항은 관리자에게 문의 바랍니다..')
            }
        })
    }

    useEffect(() => {
        setTimeout(function () {
            if (password === isPassword) {
                setCorrect(true);
            } else {
                setCorrect(false);
            }
        }, 2000);
    }, [isPassword]);

    useDidMountEffect(() => {
        if (user.isLogin) {
            navigate('/')
        }
    }, [user])

    return (
        <>
            <Header />
            <div className='new-signup-wrap'>
                <div className='new-stud-wrap'>
                    <span className='new-stud-title'>신입생 회원가입</span>
                </div>
                <form className='new-stud-login-wrap'>
                    <input type='text' onChange={e => { setName(e.target.value) }} value={name} className='new-stud' placeholder='이름을 입력해주세요.' />
                    <input type='text' onChange={e => { setID(e.target.value) }} value={id} className='new-stud' placeholder='아이디를 입력해주세요.' />
                    <input type='password' onChange={e => { setPassword(e.target.value) }} value={password} className='new-stud' placeholder='비밀번호를 입력해주세요.' />
                    <input type='password' onChange={e => { setIsPassword(e.target.value) }} value={isPassword} className='new-stud' placeholder='비밀번호를 재입력해주세요.' />
                    <button disabled={(password !== isPassword) || isPassword.length === 0} onClick={onClickCheckLogin} className='new-stud-login-btn'>신입생 회원가입 신청하기</button>
                </form>
                {correct ? ''
                    :
                    <span className='error-pw'>
                        비밀번호가 일치하지 않습니다.
                    </span>}
                <Link to='/new' className='newsignup'>신입생 로그인하기</Link>
                <div className='new-stud-wrap'>
                    <span className='new-stud-title'>신입생 계정은 어떻게 발급받나요?</span>
                    <span className='new-stud-subtitle'>아래와 같은 절차를 통해 발급받으실 수 있습니다.</span>
                </div>
                <div className='how-new-stud'>
                    <span>
                        본인의 본명과 사용할 아이디, 비밀번호를 작성 후 '신입생 회원가입 신청하기'를 클릭해주세요.
                        <br />
                        이때 본명 뒤 (신입생)을 꼭 붙여주셔야 검토가 가능합니다. 양식에 어긋나는 계정은 승인될 수 없습니다.
                    </span>
                    <span style={{ marginTop: '20px' }}>* 예시사진 *</span>
                    <div className='exam-wrap'>
                        <img src='https://media.discordapp.net/attachments/1036162758875549761/1046297213078339604/2022-11-27_2.31.21.png?width=1920&height=928' alt='예시사진1' className='img-one' />
                    </div>
                    <span>두 번째로, BSMBOO 인스타그램 공식 계정이나 지메일로 아래의 내용을 보내주세요.
                        <br />
                        내용에는 인증 사진, 신청한 아이디, 신청한 이름 총 세 가지를 보내주셔야 합니다.
                        <br />
                        인증 사진은 합격이 증명될 수 있는 사진이어야 합니다. 합격 사이트에서 이름이 나온 캡처본이나,
                        <br />
                        부산소마고 행정실에서 온 문자의 입력란에 자신의 이름이나 아이디를 적어 캡처해 인증할 수 있습니다.
                        <br />
                        <a href='https://instagram.com/bssm.forest'
                            target={'_blank'}
                            rel='noreferrer'
                        ><b>@bssm.forest</b></a> 혹은 <b>tshapejunior@gmail.com</b>으로 보내실 수 있습니다. (지메일은 확인이 느릴 수 있습니다.)
                        <br />
                        관리자가 확인 후 임시 아이디 발급이 완료되었을 경우, 확인 메일 혹은 DM이 전송됩니다.
                        <br />
                        예시의 교내 행정실에서 보낸 사진은 실제 신입생이 받은 메시지와 다를 수 있습니다. 참고 바랍니다.
                    </span>
                    <span style={{ marginTop: '20px' }}>* 예시사진 *</span>
                    <div className='exam-wrap'>
                        <img src='https://media.discordapp.net/attachments/1036162758875549761/1046298822344716310/Screenshot_20221127-143725_Messages.jpg?width=514&height=935' alt='예시사진2' className='img-three' />
                        <img src='https://media.discordapp.net/attachments/1036162758875549761/1046300412971601940/Screenshot_20221127-143924_Instagram.jpg?width=437&height=936' alt='예시사진3' className='img-three' />
                        <img src='https://media.discordapp.net/attachments/1036162758875549761/1046301026103341056/Screenshot_20221127-144517_Gmail.jpg?width=441&height=935' alt='예시사진3' className='img-three' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewSignup;