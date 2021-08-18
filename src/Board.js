import React from 'react';

function Board() {
    return (
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">번호</th>
                        <th scope="col">제목</th>
                        <th scope="col">작성자</th>
                        <th scope="col">작성일</th>
                        <th scope="col">조회수</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                            <td>k</td>
                            <td>y</td>
                            <td>s</td>
                            <td>!</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                            <td>k</td>
                            <td>y</td>
                            <td>s</td>
                            <td>!</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                            <td>k</td>
                            <td>y</td>
                            <td>s</td>
                            <td>!</td>
                    </tr>
                </tbody>
            </table>
    );
}

export default Board;