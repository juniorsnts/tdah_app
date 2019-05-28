import React, { Component } from 'react'
import { Container, Content, ViewClinic } from './styles';
import Header from '../components/Header';
import MapView from 'react-native-maps';

class Mapa extends Component {

  state = {
    region: null
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        this.setState({ 
          region: {
            latitude,
            longitude,
            latitudeDelta: 0.0111,
            longitudeDelta: 0.0111
          } 
        });
      },
      (error) => console.log(error),
      {
        timeout: 2000,
        enableHighAccuracy: true,
        maximumAge: 1000,
      }
    )
  }

  render(){
    const { region } = this.state;
    return (
      <Container>
          <Header navigation={this.props.navigation} background="#1C9E87"/>
          <Content>
          <MapView
          style={{flex: 1}}
          region={region}
          showsUserLocation
          zoomEnabled
          zoomEnabled
          loadingEnabled
          followsUserLocation
          showsMyLocationButton
          loadingBackgroundColor="#1C9E87"
          loadingIndicatorColor="#1C9E87"
          />
          <ViewClinic>

          </ViewClinic>
          </Content>
      </Container>
    )
  }
}

export default Mapa;
