import React, { Component } from 'react';

//import callApi from "../../api"

import {MDCDataTable} from '@material/data-table';
import StationItem from '../Station/StationItem'

import {connect} from "react-redux"
//import {getStations} from "../../actions/stations"


class Station extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stations: []
        }
    }
    
    // render props technique
    renderStation = () => {
        return this.props.stations.map((station,index) => {
          return <StationItem
                key={index}
                station={station}
                index={index}
            />
        })
    }

    render() {
        return (
            <div>
                <h2 style={{margin:0,paddingTop: "50px"}}>QUẢN LÝ BẾN XE</h2>
                {/*data table*/} 

                <div className="mdc-data-table">
                    <table className="mdc-data-table__table" aria-label="Dessert calories">
                        <thead>
                        <tr className="mdc-data-table__header-row">
                            <th className="mdc-data-table__header-cell" role="columnheader" scope="col">Số thứ tự</th>
                            <th className="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Bến xe</th>
                            <th className="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Địa chỉ</th>
                            <th className="mdc-data-table__header-cell" role="columnheader" scope="col">Tỉnh/Thành phố</th>
                        </tr>
                        </thead>
                        <tbody className="mdc-data-table__content">
                        
                        {this.renderStation()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Station;