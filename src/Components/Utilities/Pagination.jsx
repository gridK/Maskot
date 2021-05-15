import React, {useRef, useState, useEffect} from 'react';
import '../../Styles/maskot-styling.scss';


function Paginator(props) {
    const pageNumbers = []
    for(let i=1; i <= props.totalPage; i++) {
        pageNumbers.push(i)
    }
    console.log(pageNumbers)
    return(
        <nav aria-label="...">
            <ul class="pagination pagination-md">
                { pageNumbers.map( pagenum => 
                    <>
                    { pagenum === props.currentPage &&
                    <li  class="page-item active mx-2" aria-current="page">
                        <span class="page-link-maskot">
                            {pagenum}
                            <span class="sr-only">
                                (current)
                            </span>
                        </span>
                    </li>
                    }
                    {pagenum !== props.currentPage &&
                        <li onClick={() => props.setPage(pagenum)} class="page-item mx-2"><a class="page-link-maskot" href="#">{pagenum}</a></li>
                    }
                    </>

                )
                }
                
                {/* <li class="page-item mx-2"><a class="page-link-maskot" href="#">2</a></li>
                <li class="page-item mx-2"><a class="page-link-maskot" href="#">3</a></li> */}
            </ul>
        </nav>
    );
}

export default Paginator;