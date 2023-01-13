import React, { useCallback, useContext, useState } from 'react'
import '../Style/Post.scss'
import axios from 'axios'
import AllPost from './AllPost'
import { UserContext } from '../App'
import checkLogo from '../Image/checkImg.svg'
import postLogo from '../Image/postImg.svg'
import { Textarea } from './Textarea'

const Post = () => {
    const user = useContext(UserContext)
    const [contents, setContents] = useState("")
    const [isAnonymous, setIsAnonyMous] = useState(true)
    const [preventMultipleClick, setPreventMultipleClick] = useState(false)
    const [Image, setImage] = useState<any>(null)
    const [option, setOption] = useState('')
    const [textareaHeight, setTextareaHeight] = useState({
        row: 1,
        lineBreak: [],
    })

    const resizeTextarea = (e: any) => {
        const { scrollHeight, clientHeight, value } = e.target

        if (scrollHeight > clientHeight) {
            setTextareaHeight(prev => ({
                row: prev.row + 1,
                lineBreak: { ...prev.lineBreak, [value.length - 1]: true },
            }))
        }
        if (textareaHeight.lineBreak[value.length]) {
            setTextareaHeight(prev => ({
                row: prev.row - 1,
                lineBreak: { ...prev.lineBreak, [value.length]: false },
            }))
        }
    }

    const onKeyEnter = (e: any) => {
        if (e.code === 'Enter') {
            setTextareaHeight((prev) => ({
                row: prev.row + 1,
                lineBreak: { ...prev.lineBreak, [e.target.value.length]: true },
            }))
        }
    }

    const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContents(e.target.value)
    }

    const onClickAnony = () => {
        setIsAnonyMous(isAnonymous => !isAnonymous)
    }

    const encodeFileToBase64 = (fileBlob: File) => {
        if (fileBlob.type !== 'image/png' &&
            fileBlob.type !== 'image/jpg' &&
            fileBlob.type !== 'image/jpeg' &&
            fileBlob.type !== 'image/webp' &&
            fileBlob.type !== 'image/gif') {
            alert('올바른 사진 형식이 아닙니다. 파일을 다시 확인해주세요.')
            window.location.reload()
            return
        } else {
            const reader = new FileReader()
            reader.readAsDataURL(fileBlob)
            return new Promise((resolve) => {
                reader.onload = () => {
                    setImage(reader.result)
                    resolve('')
                }
            })
        }
    }

    const onSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault()
        setPreventMultipleClick(true)

        if (!user.isLogin) {
            alert('로그인 상태를 확인할 수 없습니다. 로그인 후에 글을 작성하실 수 있습니다.')
            setPreventMultipleClick(false)
            return
        } else if (!contents) {
            alert('내용이 비어있습니다. 제보 내용을 다시 한 번 확인해주세요.')
            setPreventMultipleClick(false)
            return
        } else if (contents.length > 5000) {
            alert('내용이 제한을 초과했습니다. 5000자 이내로 작성해주세요.')
            return
        }

        if (isAnonymous) {
            try {
                await axios.post('/board',
                    {
                        contents,
                        Usercode: -1,
                        isAnonymous,
                        Image,
                        category: option
                    }
                )
                alert('제보가 접수 되었습니다. 관리자 승인 후 목록에 표시됩니다.')
                setPreventMultipleClick(false)
                window.location.reload()
            } catch (err) {
                console.log(err)
                alert('이미지 용량이 너무 큽니다.')
                setPreventMultipleClick(false)
            }
        } else {
            try {
                await axios.post('/board',
                    {
                        contents,
                        Usercode: user.code,
                        isAnonymous,
                        Image,
                        category: option
                    }
                )
                alert('제보가 접수 되었습니다. 관리자 승인 후 목록에 표시됩니다.')
                setPreventMultipleClick(false)
                window.location.reload()
            } catch (err) {
                console.log(err)
                alert('이미지 용량이 너무 큽니다.')
                setPreventMultipleClick(false)
            }
        }

    }, [user, contents, isAnonymous, Image, option])

    return (
        <form onSubmit={onSubmit}>
            <div className='article_wrap'>
                <div className='article_box'>
                    <div className='post_title_box'>
                        <h1 className='post_title'>제보하기</h1>
                        <div className='form_boxs'>
                            <div className='posts-wrap'>
                                <input type="file" onChange={(e) => { encodeFileToBase64(e.target.files[0]) }}
                                    accept="image/png, image/gif, image/jpg"
                                    disabled={!user.isLogin} />
                                {Image ? <img src={Image} alt='미리보기' className='preview-img' />
                                    : ''}
                                <div className='anony-button-wrap'>
                                    <span className='anony_button_span' onClick={onClickAnony}>익명</span>
                                    {isAnonymous ?
                                        (<button type='button' className='anony-button' onClick={onClickAnony} style={{ backgroundColor: 'green' }}>
                                            <img src={`${checkLogo}`} alt='check' />
                                        </button>)
                                        :
                                        (<button type='button' className='anony-button' onClick={onClickAnony}>
                                            &nbsp;
                                        </button>)}
                                </div>
                                <div className='post-select-wrap'>
                                    <select onChange={(e) => { setOption(e.target.value) }}>
                                        <option>자유</option>
                                        <option>고민</option>
                                        <option>질문</option>
                                        <option>불만</option>
                                        <option>건의</option> {/* 답변 달 수 있게 */}
                                    </select>
                                </div>
                                <div className='post-button-wrap'>
                                    <button type='submit' id='post' className='post_button' disabled={preventMultipleClick}>
                                        <img src={`${postLogo}`} alt='' />
                                        <span>제보</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='editor_box'>
                        <Textarea
                            className='editor'
                            autoComplete="off"
                            onInput={resizeTextarea}
                            onKeyDown={onKeyEnter}
                            rows={textareaHeight.row}
                            onChange={onChangeContent}
                            disabled={!user.isLogin}
                            placeholder={!user.isLogin ?
                                '로그인 후 글을 작성하실 수 있습니다.'
                                : ''}
                        />
                        <div>
                            <span>{contents.length}/5000</span>
                        </div>
                    </div>
                    <AllPost />
                </div>
            </div>
        </form >
    )
}

export default Post