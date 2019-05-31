import React, { Component } from 'react'
import { Container, Content, ViewClinic, Card, CardImage, ViewDetais, Name, Address, Time, ButtonCard, ButtonText } from './styles';
import Header from '../components/Header';
import MapView, { Marker } from 'react-native-maps';
import Direction from 'react-native-maps-directions';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { height, width } = Dimensions.get('window');

class Mapa extends Component {

  state = {
    region: null,
    selectedClinic: null
  }
  
  async componentDidMount(){
    navigator.geolocation.watchPosition(
      ({ coords: { latitude, longitude } }) => {
        this.setState({ 
          region: {
            latitude,
            longitude,
            latitudeDelta: 0.0111,
            longitudeDelta: 0.0111,
            accuracy: 8
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

  markerClinic = ({latitude, longitude}) => {
    this.setState({
      selectedClinic: {
        latitude,
        longitude
      }
    })    
  }
  
  render(){
    const ClinicView = () => {
      return (
        <ViewClinic>
          <Card>
            <CardImage source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmDYkDkImrsrosIo_QbUtShRfLwBCC05y06CCEkyemLQyDRnCO'}}></CardImage>
            <ViewDetais>
              <Name>Laboratório Furlan</Name>
              <Address>Avenida comandante marapanim, 1335</Address>
              <ButtonCard 
              onPress={() => this.markerClinic({latitude: 0.01063512, longitude: -51.08876712})}>
                <Icon name="map-marker" color="#FFF"/>
                <ButtonText>Ver no mapa</ButtonText>
              </ButtonCard>
            </ViewDetais>
          </Card>             
        </ViewClinic>
      )
    }

    const ViewDirection = ({ origin, destination, onReady }) => {
      return (
        <Direction 
          origin={origin}
          destination={destination}
          apikey="AIzaSyClUxidF9ic3FZfEonoQXvPHJvApUh0-Es"
          strokeWidth={3}
          strokeColor="#1E648B"
          onReady={onReady}
          />          
      )
    }

    const { region, selectedClinic } = this.state;
    return (
      <Container>
          <Header navigation={this.props.navigation} background="#1C9E87"/>
          <Content>
            <MapView
              style={{flex: 1}}  
              region={region}
              ref={c => this.mapView = c}
              showsPointsOfInterest={false}
              followsUserLocation
              showsUserLocation
              zoomEnabled
              loadingEnabled
              showsMyLocationButton
              loadingBackgroundColor="#1C9E87"
              loadingIndicatorColor="#1C9E87">
                {selectedClinic && (
                  <>
                  <ViewDirection 
                  origin={{latitude: region.latitude, longitude: region.longitude}} 
                  destination={selectedClinic}
                  onReady={result => {
                    console.log(result);                    
                    this.mapView.fitToCoordinates(result.coordinates, {
                      edgePadding: {
                        right: (width / 20),
                        bottom: (height / 2),
                        left: (width / 20),
                        top: (height / 20),
                      }
                    })
                  }}
                  />  
                  <Marker 
                  coordinate={selectedClinic}
                  anchor={{ x: 0, y: 0 }}
                  />
                  </>
                )}
            </MapView>
            <ClinicView/>
          </Content>
      </Container>
    )
  }
}

export default Mapa;
