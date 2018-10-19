import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';
import {ChangeEvent} from "react";

interface FilterMakeup {
    makeupItems: any[];
    loading: boolean;
    displayedItems: any[];
    searchValue: string;
    brandQuery: string;
}
//const brands = ["lmay", "alva", "anna sui", "annabelle", "benefit", "boosh", "burt's bees", "butter london", "c'est moi", "cargo cosmetics", "china glaze", "clinique", "coastal classic creation", "colourpop", "covergirl", "dalish", "deciem", "dior", "dr. hauschka", "e.l.f.", "essie", "fenty", "glossier", "green people", "iman", "l'oreal", "lotus cosmetics usa", "maia's mineral galaxy", "marcelle", "marienatie", "maybelline", "milani", "mineral fusion", "misa", "mistura", "moov", "nudus", "nyx", "orly", "pacifica", "penny lane organics", "physicians formula", "piggy paint", "pure anada", "rejuva minerals", "revlon", "sally b's skin yummies", "salon perfect", "sante", "sinful colours", "smashbox", "stila", "suncoat", "w3llpeople", "wet n wild", "zorah", "zorah biocosmetiques"];

const url =  'http://makeup-api.herokuapp.com/api/v1/products.json';

export class FilterMakeupSearch extends React.Component<RouteComponentProps<{}>, FilterMakeup> {
    constructor() {
        super();
        this.state = {makeupItems: [], loading: true, displayedItems: [], searchValue: '', brandQuery:''};
    }
    
    componentDidMount() {
        
        fetch(url)
            .then(response => response.json())
            .then(json => this.setState({ makeupItems: json , loading: false, displayedItems:json }));
        
        
    }
    public render() {
           /* let queryParam = (
                <div>
                    <h5>Select Brand</h5>
                    <select name="brandlist" onChange={(e)=> this.handleBrandChange(e)}>
                        <option value={""}>any</option>
                        { brands.map((brand, index) => <option key={index} value={this.state.brandQuery}> {brand} </option>)}
                    </select>
                </div>
            );*/
            
            let contents = this.state.loading
            ? <p><em>Loading...</em></p>:
             (
                <div>
                    <ul>
                        {this.state.displayedItems.map(makeup =>
                            <li key={makeup.id.toString()}>
                                {makeup.name}
                            </li>
                        )}
                    </ul>
                </div>
            );
         
            return (
                   <div>
                        <h1>Makeup Search</h1>
                        <input placeholder="begin typing to filter list" type="text" value={this.state.searchValue}  onChange={(e)=>this.handleSearchChange(e)} />
                        {contents}
                    </div>)
        
    }
        handleSearchChange(e:ChangeEvent<HTMLInputElement>) {

            const filteredItems = this.state.makeupItems.filter(item => (item.name.toLowerCase().search(e.target.value.toLowerCase()) != -1));
            this.setState({
                searchValue: e.target.value,
                displayedItems: filteredItems,
            });
        
        }
        /*handleBrandChange(e:ChangeEvent<HTMLSelectElement>) {
        //for case when brand changed twice
            //let nameFiltered = this.state.makeupItems.filter(item => (item.name.toLowerCase().search(e.target.value.toLowerCase()) != -1));
            
            let brandFiltered = this.state.makeupItems.filter(item => (item.brand.toLowerCase().search(e.target.value.toLowerCase()) != -1));
                this.setState({
                    brandQuery: e.target.value,
                    displayedItems: brandFiltered,
                });
            
    }*/
    
   
}

