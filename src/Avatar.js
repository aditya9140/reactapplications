import React,{ useEffect } from 'react';
import './Avatar.css';
import Avatarlist from './Avatarlist';
import 'tachyons';

const Avatar = (props) => {

    const [list, setList] = React.useState([])

    useEffect(() => {
        fetch('https://reqres.in/api/users?delay=3')
        .then(response => response.json())
        .then(data => {
            setList(data.data);
        });
        
    }, [])
    
    console.log('hhhh', list)
    
    
    return ( 
    <div>
        {
            list && list.length > 0?
          <div style={{display: 'block', margin:' 0 148px'}}>
            <Avatarlist id={list[0].id} name={list[0].first_name} namelast={list[0].last_name} email={list[0].email} img={list[0].avatar}/>
            <Avatarlist id={list[1].id} name={list[1].first_name} namelast={list[1].last_name} email={list[1].email} img={list[1].avatar}/>
            <Avatarlist id={list[2].id} name={list[2].first_name} namelast={list[2].last_name} email={list[2].email} img={list[2].avatar}/>
            <Avatarlist id={list[3].id} name={list[3].first_name} namelast={list[3].last_name} email={list[3].email} img={list[3].avatar}/>
            <Avatarlist id={list[4].id} name={list[4].first_name} namelast={list[4].last_name} email={list[4].email} img={list[4].avatar}/>
            <Avatarlist id={list[5].id} name={list[5].first_name} namelast={list[5].last_name} email={list[5].email} img={list[5].avatar}/>
          </div>  : ''
        }

     </div>
    )
}

export default Avatar;