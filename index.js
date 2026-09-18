import { registerRootComponent } from 'expo';
import App from './App';

// registerRootComponent kalder AppRegistry.registerComponent('main', () => App)
// og sørger for at appen kører korrekt både i Expo Go og i en standalone build.
registerRootComponent(App);
