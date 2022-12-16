import React from 'react';
import {useParams} from 'react-router-dom';

function Ingredients(props) {
    const par=window.location.pathname// has '/chicken'
    console.log('params are ',par)

    const list=[]
    if (par == '/chicken')
        list.push(<ul><li>chicken</li><li>pepper</li><li>salt</li><li>veggies</li><li>flavour</li></ul>)
    else if (par == '/dosa')
        list.push(<ul><li>batter</li><li>salt</li><li>falvour</li><li>pepper</li><li>chutney</li></ul>)
    else if (par == '/idli')
        list.push(<ul><li>batter</li><li>salt</li><li>veggies</li><li>chutney</li></ul>)
    else if (par == '/sambar')
        list.push(<ul><li>curry leaves</li><li>salt&pepper</li><li>falvour</li><li>oregano</li><li>veggies</li></ul>)
    else//for fish
        list.push(<ul><li>fish</li><li>salt</li><li>pepper</li><li>coriander</li><li>veggies</li></ul>)


    return (
        <div><br/><br/><br/><div className='btn btn-info'>
            ingredients used are  {list}
        </div></div>
    );
}

export default Ingredients;