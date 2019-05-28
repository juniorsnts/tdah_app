import AsyncStorage from '@react-native-community/async-storage';

export function getData(key){
    try {
        return AsyncStorage.getItem(key)
            .then(res => res)
    }
    catch(err){
        return err;
    }
}

export function setData(key, data){
    try {
        return AsyncStorage.setItem(key, data)
            .then(() => true)
    }
    catch(err){
        return err;
    }
}

export function removeAll(){
    return AsyncStorage.clear();
}