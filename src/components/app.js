import ReactDOM from "react-dom";
import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.authFunc = this.authFunc.bind(this);
    }
    authFunc() {
        const authData = { data: "Auth on my site" };
        const amount = document.querySelector("#amount").value;
        if (WavesKeeper) {
            WavesKeeper.auth( authData )
            .then(auth => {
WavesKeeper.signAndPublishTransaction({
  type: 16,
  data: {
    fee: {
      tokens: '0.009',
      assetId: 'WAVES',
    },
    dApp: '3N34Zi5VD4m9az4kEXWDJngkMHMTpqLcoqo',
    call: {
      function: 'Deposit',
      args: [
      {
       "type": "integer",
        "value": 7
      },
      ],
    },
    payment: [{ assetId: 'ArPqXguhFLjJt5XwcNwhXMnCv2zSumrM19y5WgT34yRi', tokens: amount }],
  },
})
  .then(tx => {
    alert('CODE Staked Successfully!!!');
  })
  .catch(error => {
    console.error('Error', error);
  });

 //displaying the result on the console
                /*...processing data */
            }).catch(error => {
                console.error( error ); // displaying the result on the console
                /*...processing errors */
            })
        } else {
            alert("To Auth WavesKeeper should be installed.");
        }
    }

        authFunc1() {
        const authData = { data: "Auth on my site" };
        if (WavesKeeper) {
            WavesKeeper.auth( authData )
            .then(auth => {
WavesKeeper.signAndPublishTransaction({
  type: 16,
  data: {
    fee: {
      tokens: '0.009',
      assetId: 'WAVES',
    },
    dApp: '3N34Zi5VD4m9az4kEXWDJngkMHMTpqLcoqo',
    call: {
      function: 'Withdraw',
      args: [],
    },
    payment: [{ assetId: 'ArPqXguhFLjJt5XwcNwhXMnCv2zSumrM19y5WgT34yRi', tokens: 0.0001 }],
  },
})
  .then(tx => {
    alert('CODE UnStaked Successfully!!!');
  })
  .catch(error => {
    console.error('Error', error);
  });

 //displaying the result on the console
                /*...processing data */
            }).catch(error => {
                console.error( error ); // displaying the result on the console
                /*...processing errors */
            })
        } else {
            alert("To Auth WavesKeeper should be installed.");
        }
    }

    render() {
        return (
            <div className="container">
                <input className="btn btn-primary m-10 w-35 py-1" type="submit" value="Stake CODE" onClick={this.authFunc}/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                <input className="btn btn-success m-10 w-35 py-1" type="submit" value="Unstake CODE" onClick={this.authFunc1}/>
            </div>
        )
    }
}

const app = document.getElementById('app');
if(app){
    ReactDOM.render(<App/>, app);
}