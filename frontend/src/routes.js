import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from './Main';
import Home from './Home';
import InfoTdah from './InfoTdah';
import InfoSintomas from './InfoSintomas';
import InfoCausas from './InfoCausas';
import InfoTratamento from './InfoTratamento';
import Teste from './Teste';
import Podcast from './Podcast';
import Mapa from './Mapa';
import Forum from './Forum';

export const appNavigator = (istoken = false) => {
    const navigator = createStackNavigator({
        Main: Main,
        Home: Home,
        InfoTdah: InfoTdah,
        InfoSintomas: InfoSintomas,
        InfoCausas: InfoCausas,
        InfoTratamento: InfoTratamento,
        Teste: Teste,
        Podcast: Podcast,
        Mapa: Mapa,
        Forum: Forum
    },{
        headerMode: 'none',
        initialRouteName: istoken? 'Forum' : 'Main'
    });
    return createAppContainer(navigator)
}
