import React from 'react';
import '../../Styles/maskot-styling.scss';


function Paginator() {
    return(
        <nav aria-label="...">
            <ul class="pagination pagination-md">
                <li class="page-item active mx-2" aria-current="page">
                <span class="page-link-maskot">
                    1
                    <span class="sr-only">(current)</span>
                </span>
                </li>
                <li class="page-item mx-2"><a class="page-link-maskot" href="#">2</a></li>
                <li class="page-item mx-2"><a class="page-link-maskot" href="#">3</a></li>
            </ul>
        </nav>
    );
}

export default Paginator;