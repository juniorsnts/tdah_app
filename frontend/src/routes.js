import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from './Main';
import Home from './Home';
import InfoTdah from './InfoTdah';
import InfoSintomas from './InfoSintomas';
import InfoCausas from './InfoCausas';
import InfoTratamento from './InfoTratamento';
import Mapa from './Mapa';

export const appNavigator = (istoken = false) => {
    const navigator = createStackNavigator({
        Main: Main,
        Home: Home,
        InfoTdah: InfoTdah,
        InfoSintomas: InfoSintomas,
        InfoCausas: InfoCausas,
        InfoTratamento: InfoTratamento,
        Mapa: Mapa
    },{
        headerMode: 'none',
        initialRouteName: istoken? 'Home' : 'Main'
    });
    return createAppContainer(navigator)
}
