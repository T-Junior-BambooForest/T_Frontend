import axios, { AxiosError } from 'axios';
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

    const onClickCheckLogin = (e: any) => {
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
                alert('로그인에 실패했습니다. 아이디를 다시 확인해주세요.')
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
            </div>
        </>
    );
};

export default NewSignup;