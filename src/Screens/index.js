import React, {useState, useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

import MainTab from './MainTab';
import SplashScreen from './Splash';
import SignInScreen from './Signin';
import WhatWeDoScreen from './whatwedo/WhatWeDo';
import Fast from './whatwedo/Fast';
import Reliable from './whatwedo/Reliable';
import UpToDate from './whatwedo/UpToDate';
import VehicleDetail from './vehicleDetail/VehicleDetail';
import Document from './vehicleDetail/Document';
import UserAgreementScreen from './UserAgreement';
import AuthContext from 'helpers/AuthContext';
import ProfileEdit from '../components/settings/profile/ProfileEdit';
import ChangePassword from '../components/settings/profile/ChangePassword';
import Vehicles from '../components/settings/profile/pages/vehicles/Vehicles';
import FriendInvitation from '../components/settings/profile/pages/FriendInvitaion';
import DriverRating from '../components/settings/profile/pages/DriverRating';
import Documents from '../components/settings/profile/pages/Documents';
import About from '../components/settings/profile/pages/About';
import NestedSetting from '../components/settings/profile/pages/NestedSetting';
import Podcast from '../components/settings/profile/pages/Podcast';
import SMSVerify from './SMSVerify';
import EarningsDetail from '../components/earnings/EarningsDetail';
import PickupRequests from '../components/home/pages/PickupRequests';
import OrderDetail from '../components/home/pages/OrderDetail.js';
import OrderDetailBid from '../components/home/pages/OrderDetailBid.js';

const App = (props) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useMemo(() => {
    async function checkUser() {
      let userData;
      try {
        userData = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }
      setUser(userData);
      setLoading(false);
    }
    checkUser();
  }, []);

  const signIn = (data) => {
    setUser(data);
  };

  const signOut = () => {
    setUser(null);
  };

  const Stack = createStackNavigator();

  const mainNav = () => (
    <Stack.Navigator headerMode="none">
      {loading ? (
        <Stack.Screen name="Welcome" component={SplashScreen} />
      ) : (
        <>
          <Stack.Screen name="WhatWeDo" component={WhatWeDoScreen} />
          <Stack.Screen name="Fast" component={Fast} />
          <Stack.Screen name="Reliable" component={Reliable} />
          <Stack.Screen name="UpToDate" component={UpToDate} />
          <Stack.Screen name="VehicleDetail" component={VehicleDetail} />
          <Stack.Screen name="Document" component={Document} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="UserAgreement" component={UserAgreementScreen} />
          <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
          <Stack.Screen name="Vehicles" component={Vehicles} />
          <Stack.Screen name="FriendInvitation" component={FriendInvitation} />
          <Stack.Screen name="DriverRating" component={DriverRating} />
          <Stack.Screen name="Documents" component={Documents} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="NestedSetting" component={NestedSetting} />
          <Stack.Screen name="Podcast" component={Podcast} />
          <Stack.Screen name="SMSVerify" component={SMSVerify} />
          <Stack.Screen name="EarningsDetail" component={EarningsDetail} />
          <Stack.Screen name="PickupRequests" component={PickupRequests} />
          <Stack.Screen name="OrderDetail" component={OrderDetail} />
          <Stack.Screen name="OrderDetailBid" component={OrderDetailBid} />

          <Stack.Screen name="Home" component={MainTab} />
        </>
      )}
    </Stack.Navigator>
  );
  return (
    <AuthContext.Provider value={{user, signIn, signOut}}>
      <NavigationContainer>{mainNav()}</NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
