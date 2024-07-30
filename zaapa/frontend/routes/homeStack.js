import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation';
import  Settings  from './pages/Settings';
import  UpdatePassword  from './pages/UpdatePassword';
import  CreateNewPassword  from './pages/CreateNewPassword';
import  PassForgotEmail  from './pages/PassForgotEmail';
import  PassForgotPhone  from './pages/PassForgotPhone';
import  Profile  from './pages/Profile';
import  SavedLocations  from './pages/SavedLocations';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import GuidePageOne from './pages/GuidePageOne';
import GuidePageTwo from './pages/GuidePageTwo';
import GuidePageThree from './pages/GuidePageThree';
import RoadStateUpdate from './pages/RoadStateUpdate';
import LearnPage from './pages/LearnPage';
import RoadSignList from './pages/RoadSignList';
import NotifPref from './pages/NotifPref';

const Stack = createStackNavigator()
export default function homeStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName = 'LoginPage'
            >
                <Stack.Screen name= "LoginPage" componenet="LoginPage" options={{headerShown:false}}/>
                <Stack.Screen name= "RegisterPage" componenet="RegisterPage" options={{headerShown:false}}/>
                <Stack.Screen name= "GuidePageOne" componenet="GuidePageOne" options={{headerShown:false}}/>
                <Stack.Screen name= "GuidePageTwo" componenet="GuidePageTwo" options={{headerShown:false}}/>
                <Stack.Screen name= "GuidePageThree" componenet="GuidePageThree" options={{headerShown:false}}/>
                <Stack.Screen name= "PassForgotEmail" componenet="PassForgotEmail" options={{headerShown:false}}/>
                <Stack.Screen name= "PassForgotPhone" componenet="PassForgotPhone" options={{headerShown:false}}/>
                <Stack.Screen name= "CreateNewPassword" componenet="CreateNewPassword" options={{headerShown:false}}/>
                <Stack.Screen name= "Settings" componenet="Settings" options={{headerShown:false}}/>
                <Stack.Screen name= "Profile" componenet="Profile" options={{headerShown:false}}/>
                <Stack.Screen name= "UpdatePassword" componenet="UpdatePassword" options={{headerShown:false}}/>
                <Stack.Screen name= "SavedLocations" componenet="SavedLocations" options={{headerShown:false}}/>
                <Stack.Screen name= "LearnPage" componenet="LearnPage" options={{headerShown:false}}/>
                <Stack.Screen name= "RoadStateUpdate" componenet="RoadStateUpdate" options={{headerShown:false}}/>
                <Stack.Screen name= "NotifPref" componenet="NotifPref" options={{headerShown:false}}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
}