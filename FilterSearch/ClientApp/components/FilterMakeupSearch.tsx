import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';
import {ChangeEvent} from "react";

interface FilterMakeup {
    makeupItems: any[];
    loading: boolean;
    displayedItems: any[];
    searchValue: string;
}

export class FilterMakeupSearch extends React.Component<RouteComponentProps<{}>, FilterMakeup> {
    constructor() {
        super();
        this.state = {makeupItems: [], loading: true, displayedItems: [], searchValue: ''};
    }
    componentDidMount() {
        
        fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
            .then(response => response.json())
            .then(json => this.setState({ makeupItems: json , loading: true, displayedItems:json }));
        
        
    }
    public render() {
            
            let contents = !this.state.loading
            ? <p><em>Loading...</em></p>:
             (
                <div>
                    <ul>
                        {this.state.displayedItems.map(makeup =>
                            <li key={makeup.id}>
                                {makeup.name}
                            </li>
                        )}
                    </ul>
                </div>
            );
           
            return (
                <div>
                <h1>Makeup Search</h1>
                <input placeholder="begin typing to filter list" type="text" value={this.state.searchValue}  onChange={(e)=>this.handleChange(e)} />
                
                    {contents}
                </div>);
        
    }
    handleChange(e:ChangeEvent<HTMLInputElement>) {
        const filteredItems = this.state.makeupItems.filter(item => (item.name.toLowerCase().search(e.target.value.toLowerCase()) != -1 ));
        this.setState({
            searchValue: e.target.value,
            displayedItems: filteredItems,
        });
    }
    
   
}

