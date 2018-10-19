import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import {ChangeEvent} from 'react'
;interface FilterState {
    data: string[];
    value: string;
}
interface Props{
    songs: string[];
}


const pjSongs = ["1/2 Full", "Alive", "All Or None", "All Those Yesterdays", "Alone", "Angel", "Animal",
    "Around The Bend", "Aye Davanita", "Bee Girl", "Better Man", "Binaural","Black","Black, Red, Yellow","Blood",
    "Brain Of J","Brain Of J.","Breakerfall","Breath","Brother","Bugs","Bushleaguer","Can't Keep","Corduroy","Crazy Mary",
    "Cropduster","Crown Of Thorns","Daughter","Dead Man","Deep","Dirty Frank","Dissident","Do The Evolution","Don't Call Me Daughter",
    "Down","Driftin","Drifting","Elderly Woman Behind The Counter In A Small Town","Evacuation","Even Flow","Faithful",
    "Footsteps","Garden","Get Right","Ghost","Given To Fly","Glorified G","Glorified G.","Go","God's Dice","Gods' Dice",
    "Green Disease","Gremmie Out Of Control","Grievance","Habit","Hail, Hail","Hard To Imagine","Help Help",
    "Hey Foxymophandlemama, That's Me","Hold On","I Am Mine","I Got Id","I Got You","I'm Going Hungry","I'm Open",
    "Immortality","In Hiding","In My Tree","In The Moonlight","In Thin Air","Indifference","Insignificance","Jeremy",
    "Keep On Rockin' In The Free World","Last Exit","Last Kiss","Leash","Leatherman","Leaving Here","Let Me Sleep","Light Years",
    "Long Road","Love Boat Captain","Love You Hate You","Low Light","Lukin","Man Of The Hour","Mankind","Mfc","Mfc (mini Fast Car)",
    "No Way","Not For You","Nothing As It Seems","Nothing Man","Nothingman","Oceans","Of The Girl","Off He Goes",
    "Oh Where Oh Where Could My Baby Be","Once","Parting Ways","Patriot","Pilate","Porch","Present Tense","Pry, To",
    "Push Me, Pull Me","Rats","Rearviewmirror","Red Mosquito","Release","Rival","Rockin In The Free World","Save You",
    "Saying No!","Sleight Of Hand","Smile","Soldier Of Love","Sometimes","Sonic Reducer (dead Boys)","Soon Forget",
    "Spin The Black Circle","State Of Love And Trust","Strangest Tribe","Swallow My Pride","The Times They Are A—changin'",
    "Thin Air","Throw Your Arms Around Me","Thumbing My Way","Tremor Christ","U","Untitled","Untitled (the Color Red)",
    "W.m.a.","Wanted To Get Right","Wash","Whale Song","Whipping","Who You Are","Why Go","Wishlist","Words (out Of Place)",
    "Yellow Ledbetter","You Are","You've Got To Hide Your Love Awa"];


export class FilterSearch extends React.Component<RouteComponentProps<{}>, FilterState> {
    constructor() {
        super();
        this.state = {data: [""], value: ''};
        //bind function
        this.handleChange = this.handleChange.bind(this);
    }
    
    
    public render() {
        
        return <div>
                <h1>Pearl Jam Song Filterer</h1>
                <input placeholder="begin typing to see list" type="text" value={this.state.value}  onChange={(e)=>this.handleChange(e)} />
                
                <SongList songs={this.state.data}/>
                
               </div>;
    }

     handleChange(e:ChangeEvent<HTMLInputElement>) {
        const filteredSongs = pjSongs.filter(pjSong => (pjSong.toLowerCase().search(e.target.value.toLowerCase()) != -1 && e.target.value!=""));
        this.setState({
            value: e.target.value,
           data: filteredSongs
        });
    }
}
function  SongList (props: Props){
    const songs = props.songs;
    if (songs[0] != "") {
        const songsToDisplay = songs.map((song) =>
            <li>{song}</li>
        );

        return (
            <ul>{songsToDisplay}</ul>
        );
    }
    return null;
}

export default FilterSearch;


