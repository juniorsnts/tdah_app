import React, { Component } from 'react';
import { Dialog } from './styles.js';
import { GiftedChat, Bubble, Time, Send } from 'react-native-gifted-chat';
import { SendMessage } from '../../utils/conversation';
import Robo from '../../assets/imgs/robot.png';
import Icon from 'react-native-vector-icons/Feather';

class DialogBot extends Component {

    state = {
      messages: [],
      context: null
    }

    componentDidMount(){
      this.initialDialog();                  
    }

    initialDialog = async() => {
      let response = await SendMessage("");  
      this.setState({context: response.context});   
      console.log(response); 
      let message = {
        _id: Math.round(Math.random() * 1000000).toString(),
        text: response.output.text.join(' '),
        createdAt: new Date(),
        quickReplies: {
          type: 'radio', // or 'radio',
          values: [
            {
              title: 'Procuro ajuda profissional',
              value: 'mapa',
            },
            {
              title: 'Tenho duvidas sobre tdah',
              value: 'forum',
            },
            {
              title: 'Ouvir o podcast da semana',
              value: 'podcast',
            },
          ],
        },
        user: {
          _id: 2,
          name: 'Rafa',
          avatar: Robo,
        }
      }
      this.setState((oldState) => ({
        messages: GiftedChat.append(oldState.messages, message)
      }))
    }

    onSend(messages = []) {

      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, messages),
      }), () => {
        this.message(messages[0].text)
      })
    }

    message = async (text) => {
      let response = await SendMessage(text, this.state.context);
      let message = {
        _id: Math.round(Math.random() * 10000000).toString(),
        text: response.output.text.join(' '),
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Rafa',
          avatar: Robo
        }
      }
      this.setState((oldState) => ({
        messages: GiftedChat.append(oldState.messages, message)
      }))
    }

    renderBubble = (props) => {
      return (
        <Bubble
          {...props}
          textStyle={{
            left: {
              fontSize: 14,
              color: '#FFF'
            },
            right: {
              fontSize: 14,
              color: '#FFF'                            
            }
          }}
          wrapperStyle={{
            left: {
              backgroundColor: '#DDA0DD'
            }
          }}
          />
      )
    }

    renderTime = (props) => {
      return(
        <Time
          {...props}
          textStyle={{
            right: {
              color: '#FFFFFF'
            },
            left: {
              color: '#FFFFFF'
            }
          }}
        />
      )
    }

    renderSend = (props) => {
      return(
        <Send {...props} containerStyle={{
          justifyContent: 'center',
          alignItems: 'center'
        }}> 
          <Icon name="send" size={22} color="#2491C0" style={{marginRight: 10}}/>          
        </Send>
      )
    } 

    render() {
      return (
        <Dialog>   
          <GiftedChat
          renderSend={this.renderSend}
          renderTime={this.renderTime}
          renderBubble={this.renderBubble}
          showUserAvatar={true}
          placeholder="Converse comigo :)"
          isAnimated={true}
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
            avatar: this.props.photoUser
          }}
          />
        </Dialog>
      )
    }
}
export default DialogBot;
