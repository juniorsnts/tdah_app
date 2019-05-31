import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from './Main';
import Home from './Home';
import InfoTdah from './InfoTdah';
import InfoSintomas from './InfoSintomas';
import InfoCausas from './InfoCausas';
import InfoTratamento from './InfoTratamento';
import Mapa from './Mapa';
import Podcast from './Podcast';

export const appNavigator = (istoken = false) => {
    const navigator = createStackNavigator({
        Main: Main,
        Home: Home,
        InfoTdah: InfoTdah,
        InfoSintomas: InfoSintomas,
        InfoCausas: InfoCausas,
        InfoTratamento: InfoTratamento,
        Mapa: Mapa,
        Podcast: Podcast
    },{
        headerMode: 'none',
        initialRouteName: istoken? 'Podcast' : 'Main'
    });
    return createAppContainer(navigator)
}
