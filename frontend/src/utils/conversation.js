import base64 from 'react-native-base64';
let URL = 'https://gateway-syd.watsonplatform.net/assistant';
let workspaceId = '570b427d-bd19-4457-b55d-949b12946757';
let api_key = 'r_Qvsc3THHdvkGBCuAS4lptt75duZN4WDwb_LXXbOXdw';
let username = 'apikey';
let password = '0JW619NIsWn723AydqRymiEecJX3l-A6EvfVmr3uHc0t';

export const SendMessage = (input, context = {}) => {
    let headers = {
        Authorization: 'Basic '+base64.encode(username+':'+password),
        accept: 'application/json',
        'Content-Type': 'application/json',
    }
    let body = {
        alternate_intents: true,
        input: {
            'text': input
        }
    }
    if(context){
        body.context = context;
    }

    return fetch(URL + '/api/v1/workspaces/' + workspaceId + '/message?version=2019-02-28', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
    })
    .then((response) => response.json())
    .then((responseJson) => responseJson)
    .catch((error) => console.log(error));
}