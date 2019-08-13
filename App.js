import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { LinearGradient } from 'expo-linear-gradient';



function counterMines(counter) {
  counter = Number(counter) - 1;
  return counter
}
function counterPlus(counter) {
  counter = Number(counter) + 1;
  return counter
}

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text>Home!</Text>
      </View>
    );
  }
}

class AlertsScreen extends React.Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text>Alerts!</Text>
      </View>
    );
  }
}
class MarketScreen extends React.Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text>Settings!</Text>
      </View>
    );
  }
}
class ProfileScreen extends React.Component {
  constructor() {
     super();
     this.state = { val: 21 }
     this.updatePlus = this.updatePlus.bind(this)
     this.updateMinus = this.updateMinus.bind(this)
   }
   updatePlus() {
     this.setState({ val: this.state.val + 1 })
   }
   updateMinus() {
     this.setState({ val: this.state.val - 1 })
   }
  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.header }>
          <Text style={ styles.headerResponse }>Гостинная</Text>
        </View>
        <View style={ styles.gallery }>
          <Text>Гостинная</Text>
        </View>
          <LinearGradient colors={['#1D212C', '#161A25']} style={ styles.weather} start={[0.0142, 0.3445]}>
            <View style= {{borderRadius: 3, borderWidth:2, width:35, height: 3, borderColor: '#363946', marginTop: 9}}></View>
            <View style={{ flex: 0.8, flexDirection: 'row'}}>
              <View style={ styles.weatherMenuItems }>
                <Image source={require('./src/lights.png')}/>
              </View>
              <View style={ styles.weatherMenuItemsActive }>
                <Image source={require('./src/temperature.png')}/>
              </View>
              <View style={ styles.weatherMenuItems }>
                <Image source={require('./src/locks.png')}/>
              </View>
              <View style={ styles.weatherMenuItems }>
                <Image source={require('./src/windows.png')}/>
              </View>

            </View>
            <View style= {{ flex: 2.2, flexDirection: 'row' }}>
              <TouchableOpacity onPress={this.updateMinus} style={{flex:1}}>
                <View style={ styles.weatherCounterElement }>
                  <Image source={require('./src/minus.png')}/>
                </View>
              </TouchableOpacity>
              <View style={ styles.weatherCounterCenter }>
                <View style={ styles.weatherCounterEllipse}>
                  <View style={ styles.weatherCounterEllipseElement}>
                    <Image source={require('./src/snow.png')}/>
                  </View>
                  <View style={ styles.weatherCounterEllipseElement}>
                    <Text style={{color: '#FFFFFF', fontSize:50}}>{this.state.val}</Text>
                  </View>
                  <View style={ styles.weatherCounterEllipseElementGr}>
                    <Image style={{marginBottom: 20}} source={require('./src/gradus.png')}/>
                  </View>
                </View>
              </View>
              <TouchableOpacity onPress={this.updatePlus} style={{flex:1}}>
                <View style={ styles.weatherCounterElement }>
                  <Image source={require('./src/plus.png')}/>
                </View>
              </TouchableOpacity>
            </View>
            <View style= {{ flex: 1 }}></View>
          </LinearGradient>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  HomePage: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: <View/>,
        tabBarIcon: ({ tintColor }) => (
          <Image source={require('./src/home.png')}/>
        )
      },
    },
  AlertsPage: {
      screen: AlertsScreen,
      navigationOptions: {
        tabBarLabel: <View/>,
        tabBarIcon: ({ tintColor }) => (
          <Image source={require('./src/alerts.png')}/>
        )
      }
    },
  MarketPage: {
      screen: MarketScreen,
      navigationOptions: {
        tabBarLabel: <View/>,
        tabBarIcon: ({ tintColor }) => (
          <Image source={require('./src/market.png')}/>
        )
      }
    },
  ProfilePage: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: <View/>,
        tabBarIcon: ({ tintColor }) => (
          <Image source={require('./src/profile.png')}/>
        )
      }
    },
  },

  {
    order: ['HomePage', 'AlertsPage', 'MarketPage', 'ProfilePage'],
    tabBarOptions: {
      activeTintColor: '#D4AF37',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: '#040814',
      }
    },
 },
);





export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#040814'
  },
  headerResponse:{
    fontSize: 14,
    color: '#FFFFFF',
  },
  gallery:{
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  weather:{
    flex: 5,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
  },
  weatherMenuItems:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#363946',
  },
  weatherMenuItemsActive:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#1098D8',
  },
  weatherCounterElement:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  weatherCounterCenter:{
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 200,
  },
  customBtnText:{
    color: '#FFFFFF',
    fontSize: 25,
  },
  weatherCounterEllipse:{
    flex: 1,
    flexDirection:'row',
    color: '#FFFFFF',
    borderRadius: 120,
    borderWidth: 1,
    borderColor: '#363946',
    paddingTop: 55,
    paddingBottom: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  weatherCounterEllipseElementGr:{
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  weatherCounterEllipseElement:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
