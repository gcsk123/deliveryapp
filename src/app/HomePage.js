import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  FlatList, Dimensions, Pressable
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

import { Colors, Styles } from '../theme';
import { Avatar, ButtonGroup, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class HomePage extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      selectedIndex: 0
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <ListItem bottomDivider onPress={() => this.props.navigation.navigate('Details', {'item': item})}>
      <Avatar rounded title={item.name[0]} source={item.avatar_url && { uri: item.avatar_url }}/>
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.status}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  )

  renderCardItem = ({item, index}) => {
    return (
      <Pressable onPress={() => this.props.navigation.navigate('Details', {'item': item})}>
        <View style={Styles.cardCss} >
          <View style={Styles.cardView1}>
            <Avatar size="large"
              rounded
              source={{uri:item.avatar_url}}
            />
          </View>
          <View style={Styles.cardView2}>
            <View style={{flexDirection: "row"}}>
              <View style={{ flex: 0.9 }}>
                <Text style={[Styles.homeHeading1, {fontSize: 15}]}>Hi {item.name}</Text>
              </View>
              <View style={{ flex: 0.1}}>
                <Icon name='info-circle' size={18} color='#C0C0CA' />
              </View>
            </View>
            <View style={{flexDirection: "row"}}>
              <Icon name='star' size={15} color='#F8C503' />
              <Icon name='star' size={15} color='#F8C503' />
              <Icon name='star' size={15} color='#F8C503' />
              <Icon name='star' size={15} color='#F8C503' />
              <Icon name='star' size={15} color='#F8C503' />
            </View>
            <Text style={[Styles.homeHeading3, {paddingTop: 5}]}>Jumeiro business center</Text>
            <Text style={[Styles.homeHeading3, {paddingTop: 5}]}>Weight: 2kg</Text>
            <View style={Styles.buttonView}>
              <TouchableOpacity style={Styles.buttonCss} >
                <Text>10:30 am</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Styles.buttonCss}>
                <Text>6:00 pm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Pressable>
    );
  }


  processList = (list, selectedIndex) => {
    let upcomingList = [];
    let historyList = [];
    list.forEach(eachItem => {
      if(eachItem.status == 'upcoming') {
        upcomingList.push(eachItem);
      }else historyList.push(eachItem);
    });
    return (selectedIndex == 0) ? upcomingList : historyList
  }

  render() {
    const { width: viewportWidth } = Dimensions.get('window');

    function wp (percentage) {
        const value = (percentage * viewportWidth) / 100;
        return Math.round(value);
    }
    const slideWidth = wp(90);
    const itemWidth = slideWidth-50 ;

    const segmentBtns = ['Upcoming', 'History']
    const { selectedIndex } = this.state;
    const list = [
      {
        name: 'Amy Farha',
        avatar_url: 'https://cad.gov.jm/wp-content/uploads/2017/10/img_avatar2.png',
        subtitle: 'Vice President',
        status: 'upcoming'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg',
        subtitle: 'Vice Chairman',
        status: 'old'
      },{
        name: 'Amy Farha',
        avatar_url: 'https://cad.gov.jm/wp-content/uploads/2017/10/img_avatar2.png',
        subtitle: 'Vice President',
        status: 'old'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg',
        subtitle: 'Vice Chairman',
        status: 'upcoming'
      },
    ]

    return (
      <>
        <View style={Styles.container}>
          <SafeAreaView style={Styles.scrollView}>
            <ScrollView contentInsetAdjustmentBehavior="automatic" style={Styles.mainContainer}>
                <Text style={Styles.homeHeading1}>Hi Gulam</Text>
                <Text style={Styles.homeHeading2}>Good Morning !</Text>
                <Text style={Styles.homeHeading3}>2 new shipments are available.</Text>
                <Carousel
                  layout={'default'} layoutCardOffset={`9`} 
                  ref={(c) => { this._carousel = c; }}
                  data={list}
                  renderItem={this.renderCardItem}
                  sliderWidth={slideWidth}
                  itemWidth={itemWidth}
                />
                
                <View style={Styles.segmentCss}>
                  <ButtonGroup
                    innerBorderStyle={{color:'transparent'}}
                    buttonContainerStyle={{backgroundColor: 'transparent', borderRadius: 20}}
                    buttonStyle={{borderRadius: 20}}
                    selectedButtonStyle={{backgroundColor: '#fff'}}
                    selectedTextStyle={{color: 'black'}}
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={segmentBtns}
                    containerStyle={{height: 45, backgroundColor: 'transparent'}}
                  />
                </View>
                <View>
                  <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.processList(list, selectedIndex)}
                    renderItem={this.renderItem}
                  />
                </View>
              
            </ScrollView>
          </SafeAreaView>
        </View>
      </>
    );
    
  }
}

export default HomePage;
