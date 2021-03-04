import React,{ Component } from 'react';
import Card from './components/Card/Card.js';


class App extends Component {

    constructor(){
        super()
        this.state = {
            list : [],
            inputField: "",
            fontSize: 14
        }
    }

    async componentDidMount () {
        const response = await fetch('https://cdn.contentful.com/spaces/rt3kkpldvuz8/environments/master/entries',{
            method: 'GET',
            headers: {
                'Authorization': 'Bearer IkcFOdcUNLz2jTW8_ecjqA0h2FP2IQg42lwOfCugFEE'
            }
        });
        const data = await response.json()
        console.log(" data", data)
        this.setState({ list: data.items })
    }

    onInputChange = (e) => {
        console.log(" my value ", e.target.value)
        this.setState({ inputField: e.target.value, fontSize: e.target.value})
    }
    
    render() { 
        const { list, inputField, fontSize } = this.state;
        return (
            <div> 
                {/* Input box */}
                <input
                    onChange={(e) => this.onInputChange(e)}
                    value={inputField}
                />
                {list.map((item, key) => {
                    return (
                        <Card data={item.fields} key={key} fontSize={fontSize}/>
                    )
                })}
            </div>
        );
    }
}
 
export default App;