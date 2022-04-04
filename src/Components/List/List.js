import React from 'react';

const List = props => {
    
    const {item} = props;

    return (
        <div>
            <ul>
                {
                    props.items.map( (item) => (
                        <li>
                            {item.number}
                        </li>
                    ) )
                }
            </ul>
        </div>
    );
}

export default List;