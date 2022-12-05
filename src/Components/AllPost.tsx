import React, { useState } from 'react';
import { AutoSizer, List } from 'react-virtualized';
import '../Style/Forum.scss';

const Sample1 = () => {
    const mockData = [
        {
            content: "content입니다1."
        },
        {
            content: "content입니다2."
        },
        {
            content: "content입니다3."
        },
        {
            content: "content입니다4."
        },
    ];

    const [data, setData] = useState(mockData);
    const scrollListener = (params: any) => {
        if (params.scrollTop + params.clientHeight >= params.scrollHeight - 300) {
            if (data.length <= 100) {
                setData([
                    ...data,
                    {
                        content: "추가된 content입니다1."
                    },
                    {
                        content: "추가된 content입니다2."
                    },
                    {
                        content: "추가된 content입니다3."
                    },
                    {
                        content: "추가된 content입니다4."
                    }])
            }
        }
    };

    const rowRanderer = ({ index, style }: any) => {
        const post = data[index];
        return (
            <div style={style}>
                {post.content}
            </div>
        );
    };

    return (
        <AutoSizer AutoSizer>
            {({ width }: any) => (
                <List
                    rowCount={data.length} // 항목의 개수
                    height={400} // 실제 렌더링 되는 높이범위
                    rowHeight={200} // 항목의높이
                    width={width} // 항목의 너비
                    rowRenderer={rowRanderer} // 항목렌더링할때쓰는 함수
                    onScroll={scrollListener} // scroll 함수
                    overscanRowCount={2} // 다음에 로드해올 항목 미리 컨텐츠 높이 잡기
                />
            )}
        </AutoSizer>
    )
}

export default Sample1;
