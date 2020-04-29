import React, { Component } from 'react';

class StationItem extends Component {
    render() {
        const {index,station} = this.props

        console.log("StationItem")
        console.log(station.name)
        
        return (
            <div>
                <tr className="mdc-data-table__row">
                    <td className="mdc-data-table__cell">{index+1}</td>
                    <td className="mdc-data-table__cell">{station.name}</td>
                    <td className="mdc-data-table__cell">{station.address}</td>
                    <td className="mdc-data-table__cell">{station.province}</td>
                </tr>
            </div>
        );
    }
}

export default StationItem;