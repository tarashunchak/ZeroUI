import * as SplashScreen from 'expo-splash-screen';
import HomeScreen from '.';

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  return (
    <HomeScreen/>
  );
}
