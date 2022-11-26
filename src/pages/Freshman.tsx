import axios, { AxiosError } from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SetUserContext, UserContext } from '../App';
import Header from '../Components/Header';
import '../Style/Freshman.scss';

const Freshman = () => {
    const user = useContext(UserContext);
    const setUser = useContext(SetUserContext);
    const [id, setID] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const onClickCheckLogin = (e: any) => {
        e.preventDefault();
        console.log(id, password, name)
        axios.post('/localLogin', {
            id,
            password,
            name
        }).then((res) => {
            alert('로그인에 성공했습니다!')
            navigate('/')
        }).catch((err) => {
            console.log(err)
            if (err.code === "ERR_NETWORK") {
                alert('로그인에 성공했습니다!')
                navigate('/')
            } else {
                alert('로그인에 실패했습니다. 아이디를 다시 확인해주세요.')
            }
        })
    }

    return (
        <div>
            <Header mode={true} />
            <div className='new-stud-wrap'>
                <span className='new-stud-title'>신입생이신가요?</span>
                <span className='new-stud-
                '>BSMBOO는 신입생도 절차를 통해 서비스를 이용할 수 있습니다.</span>
            </div>
            <button onClick={() => { console.log(user) }}>asc</button>
            <form className='new-stud-login-wrap'>
                <input type='text' onChange={e => { setName(e.target.value) }} value={name} className='new-stud' placeholder='이름을 입력해주세요.' />
                <input type='text' onChange={e => { setID(e.target.value) }} value={id} className='new-stud' placeholder='임시 아이디를 입력해주세요.' />
                <input type='password' onChange={e => { setPassword(e.target.value) }} value={password} className='new-stud' placeholder='임시 비밀번호를 입력해주세요.' />
                <button onClick={onClickCheckLogin} className='new-stud-login-btn'>신입생으로 로그인하기</button>
            </form>
            <div className='new-stud-wrap'>
                <span className='new-stud-title'>신입생 계정은 어떻게 발급받나요?</span>
                <span className='new-stud-subtitle'>아래와 같은 절차를 통해 발급받으실 수 있습니다.</span>
            </div>
            <div className='how-new-stud'>
                <span>첫 번째로, 신입생임을 인증할 수단이 필요합니다. 자신의 이름이 나온 합격 사진을 준비해주세요.
                    <br />
                    또는 학교에서 발신한 아무 메세지의 입력칸에 자신의 이름을 적어 캡처한 사진을 준비해주세요.
                    <br />
                    예시 사진은 예를 들기 위한 사진이므로, 신입생이 받은 메시지나 합격 사이트와 다를 수 있습니다.
                </span>
                <span style={{ marginTop: '20px' }}>* 예시사진 *</span>
                <div className='exam-wrap'>
                    <img src='https://media.discordapp.net/attachments/1036162758875549761/1043737989521625118/exam1.jpeg?width=467&height=935' alt='예시사진1' className='img-one' />
                    <img src='https://media.discordapp.net/attachments/1036162758875549761/1043738013861150801/exam2.jpeg' alt='예시사진2' className='img-two' />
                </div>
                <span>두 번째로, BSMBOO 인스타그램 공식 계정이나 지메일로 아래의 내용을 보내주세요.
                    <br />
                    내용은 인증 사진과 함께 사용할 아이디, 이름을 같이 보내주셔야합니다.
                    <br />
                    본명은 실명, 아이디는 영문이어야 하며, 5자 이하의 아이디는 사용이 불가능합니다.
                    <br />
                    위 형식 중 하나 이상이 빠져있거나, 사용할 수 없을 경우 아이디를 발급할 수 없습니다.
                    <br />
                    <a href='https://instagram.com/bssm.forest'
                        target={'_blank'}
                        rel='noreferrer'
                    ><b>@bssm.forest</b></a> 혹은 <b>tshapejunior@gmail.com</b>으로 보내실 수 있습니다.
                    <br />
                    관리자가 확인 후 임시 아이디 발급이 완료되었을 경우, 확인 메일 혹은 DM이 전송됩니다.
                </span>
                <span style={{ marginTop: '20px' }}>* 예시사진 *</span>
                <div className='exam-wrap'>
                    <img src='https://media.discordapp.net/attachments/1036162758875549761/1043738036757856287/exam3.jpeg?width=498&height=936' alt='예시사진3' className='img-three' />
                    <img src='https://media.discordapp.net/attachments/1036162758875549761/1043738154466816050/exam4.jpeg?width=746&height=937' alt='예시사진4' className='img-four' />
                </div>
            </div>
        </div>
    );
};

export default Freshman;