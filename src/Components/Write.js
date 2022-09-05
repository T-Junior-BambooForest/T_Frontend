import React from 'react';
import '../Styles/Write.css';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';

const Write = ({ images }) => {
    return (
        <div>
            {images === 'Sun' ?
                <div className='forumItem'>
                    <div className='forumItemBox'>
                        <form>
                            <img src='/images/picture.png' className='profile' alt='profile' />
                            <input className='write' type='text' placeholder={'박우빈님, 무슨 생각을 하고 계신가요?'} />
                            <div className='line' />
                            <input type='submit' value='게시' className='btn' id='writeBtn' />
                        </form>
                    </div>
                </div>
                :
                <div className='forumItemDark'>
                    <div className='forumItemDarkBox'>
                        <form>
                            <img src='/images/picture.png' className='profile' alt='profile' />
                            <input className='darkWrite' type='text' placeholder={'박우빈님, 무슨 생각을 하고 계신가요?'} />
                            <div className='line' />
                            <input type='submit' value='게시' className='darkBtn' id='writeBtn' />
                        </form>
                    </div>
                </div>}
        </div>
    );
};

export default Write;