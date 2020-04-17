import React from 'react';
import {connect} from 'react-redux';
import {ConnectedTasks} from './TaskList';
// export const Dashboard=({groups})=>(
//     <div>
//         <h2>Dashboard</h2>
//     </div>
// )
export class Dashboard extends React.Component{
    constructor(groups){
        super(groups);
        this.state={
            state:groups
        }
    }
    render(){
        console.log(this.props);
        return <div><h2>DashBoard</h2>       
        {this.props.groups.map(group=>(<div>
        <ConnectedTasks id={group.id} name={group.name}/>
        </div>))}
        </div>
    }
}

function mapState(state){
    return {groups:state.groups};
}

export const ConnectedDashboard=connect(mapState)(Dashboard);
