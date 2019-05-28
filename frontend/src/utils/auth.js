import { getData } from './storage';

export const isToken = async () => {

    const token = await getData('token');

    return (token !== null) ? true : false;
}