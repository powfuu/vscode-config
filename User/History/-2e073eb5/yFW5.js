import React from 'react'
import * as e from './bottomnavComponents'
class NavIco extends React.Component {
//   const [inactiveIco, setInactiveIco]=useState("#999")
//    const [activeIco, setActiveIco]=useState("#24252A")
    render(){
        return(
            <e.NavIcon onPress={()=>{
                navigation.navigate('SignupPersonal')
            }} name="dashboard" size={25} color='#000000' />
        )
    }
}
