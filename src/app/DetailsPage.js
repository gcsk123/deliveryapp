import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native';

import { Colors, Styles } from '../theme';
import { Avatar, ButtonGroup, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class DetailsPage extends Component {
  constructor(props) {
    super(props);    
  }

  render() {
    const { item } = this.props.route.params;
    console.log(item);
    return (
      <>
        <View style={Styles.container}>
          <SafeAreaView style={Styles.scrollView}>
            <ScrollView contentInsetAdjustmentBehavior="automatic" style={Styles.mainContainer}>
              <View style={[Styles.cardCss, {height: 300, marginTop: 0}]}>
              </View>
              <View style={[Styles.cardCss, {marginTop: 10}]}>
                <View style={[Styles.cardView1, {flex: 0.2}]}>
                  <Avatar size="medium"
                    rounded
                    source={{uri:item.avatar_url}}
                  />
                </View>
                <View style={Styles.cardView2}>
                  <View style={{flexDirection: "row"}}>
                    <View style={{ flex: 0.9 }}>
                      <Text style={[Styles.homeHeading3, {fontSize: 12, paddingTop: 0}]}>Driver Name</Text>
                      <Text style={[Styles.homeHeading1, {fontSize: 14, paddingBottom: 5}]}>{item.name}</Text>
                      <View style={{flexDirection: "row"}}>
                        <Icon name='star' size={15} color='#F8C503' />
                        <Icon name='star' size={15} color='#F8C503' />
                        <Icon name='star' size={15} color='#F8C503' />
                        <Icon name='star' size={15} color='#F8C503' />
                        <Icon name='star' size={15} color='#F8C503' />
                      </View>
                    </View>
                    <View style={{ flex: 0.1}}>
                      <Avatar size="small"
                        rounded
                        source={{uri:'https://static.thenounproject.com/png/250878-200.png'}}
                      />
                    </View>
                  </View>                    
                </View>    
              </View>
              <View style={{flexDirection: "row", paddingTop: 10}}>
                <View style={{ flex: 0.4 }}>
                  <Text style={[Styles.homeHeading3, {fontSize: 12, paddingTop: 0}]}>Shipment#</Text>
                  <Text style={[Styles.homeHeading1, {fontSize: 14, paddingBottom: 5}]}>1475855</Text>
                </View>
                <View style={{ flex: 0.4}}>
                  <Text style={[Styles.homeHeading3, {fontSize: 12, paddingTop: 0}]}>East Delivery</Text>
                  <Text style={[Styles.homeHeading1, {fontSize: 14, paddingBottom: 5}]}>6:00 pm</Text>
                </View>
                <View style={{ flex: 0.4}}>
                  <Text style={[Styles.homeHeading1, {fontSize: 14, paddingTop: 15}]}>On time</Text>
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </View>
      </>
    );
  }
}

export default DetailsPage;
