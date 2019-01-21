import {Properties} from './EnvProperties';

class URLParser{
    static getURL(urlDef){
        if(Properties.DEVELOPMENT_MODE){
            return Properties[urlDef];
        }
        return Properties.GLOBAL_URL;
    }
}
export default URLParser