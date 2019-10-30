import React from 'react';
import Pagination from "material-ui-flat-pagination";


function PaginatorItem() {
    const [offset, setState] = React.useState([20, 37]);

    const handleClick = (offset) => {
        this.setState({ offset });
      }
      
    return (
        <Pagination
            limit={10}
            offset={offset}
            total={100}
            onClick={handleClick}
        />
    )

}

export default PaginatorItem;