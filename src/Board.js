import React from 'react';

function Board() {
    return (
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col" class="text-center">제목</th>
                    <th scope="col" class="text-center">작성자</th>
                    <th scope="col" class="text-center">작성일</th>
                    <th scope="col" class="text-center">조회수</th>
                </tr>
            </thead>
        </table>
    );
}

export default Board;