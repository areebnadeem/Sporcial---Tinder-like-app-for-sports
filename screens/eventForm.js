import * as React from 'react';
import {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Button, Text, TextInput, ScrollView, Picker, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from 'react-native-reanimated';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { render } from '@react-three/fiber';

const Form = ({ navigation, route }) => {
  const [date, setDate] = useState( new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const [selectedValue, setSelectedValue] = useState("");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
    return (
      <View style ={styles.container}>
      <View style={styles.header}>
                <TouchableOpacity onPress = {() => navigation.navigate('hostscreen')}>
                <Icon name= 'arrow-left' style = {styles.arrow} />
                </TouchableOpacity>
                <Image source={require('./images/logo.png')} />
      </View>
      <ScrollView>
        <SafeAreaView>
         <Text style={styles.big}> Host Event </Text>
         <Text style = {styles.eventName}>
           Name of the Event
         </Text>
         <TextInput style={styles.input}
         placeholder= "Event Name"
         >
         </TextInput>

         <View>
           <Picker
             selectedValue = {selectedValue}
             onValueChange= {(itemValue, itemIndex) => setSelectedValue(itemValue)}
             >
              <Picker.Item label="Pokfield Road Playground" value="prp" />
              <Picker.Item label="Causeway Bay Playground" value="cbp" />
           </Picker>
         </View>
         <Text style={styles.normText}>
           Location
         </Text >
         <TextInput style={styles.input} 
         placeholder= "Location"
         >
         </TextInput>
         
         <Text style = {styles.normText}>
           Date and Time
         </Text>
         <TextInput style={styles.input}> {date.toString()} </TextInput>


        <View>
        <View>
        <Button onPress={showDatepicker} title="Show date picker!" color='red'/>
        </View>
        <View>
        <Button onPress={showTimepicker} title="Show time picker!" color='red' />
      </View>
      <View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      </View>
        </View>



         <Text style = {styles.normText}>
           Type of Sport
         </Text>
         <TextInput style={styles.input}
         placeholder= "Sport Type"
         >
          
         </TextInput>

         <View>
           <Picker
             selectedValue = {selectedValue}
             onValueChange= {(itemValue, itemIndex) => setSelectedValue(itemValue)}
             >
              <Picker.Item label="Football" value="prp" />
              <Picker.Item label="Basketball" value="cbp" />
           </Picker>
         </View>

         <Text style = {styles.normText}>
           Description
         </Text>
         <TextInput style={styles.desc}>
          
         </TextInput>
        <TouchableOpacity style = {styles.butt}> 
         <Text style= {styles.buttText}> Create! </Text>
        </TouchableOpacity>
        </SafeAreaView>
        </ScrollView>
        </View>
    );
  };

  const styles = StyleSheet.create({
    big: {
      textAlign: 'center',
      textShadowRadius: 5,
      color: 'red',
      fontStyle: 'italic',
      fontSize: 40,
      fontWeight: 'bold',
    },
    eventName: {
      marginTop: 10, 
      fontWeight: 'bold',
      fontSize: 17,
      marginLeft: 8

    },
    normText: {
      fontWeight: 'bold',
      fontSize: 17,
      marginLeft: 8
    },
    input: {
      height: 40,
      margin: 6,
      borderColor: '#FFB3B3',
      backgroundColor: '#FFB3B3',
      borderWidth: 1,
      padding: 10,
      width: 340,
      marginBottom: 20
    },
    butt: {
      backgroundColor: 'red',
      width: 200,
      height: 40,
      marginTop: 20,
      marginBottom: 20,
      justifyContent: 'center',
      alignSelf: 'center'
      
    },
    buttText: {
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20,
    },
    desc: {
      height: 140,
      margin: 6,
      borderColor: '#FFB3B3',
      backgroundColor: '#FFB3B3',
      borderWidth: 1,
    },
    container: {
      flex: 1,
      alignContent: 'center',
      alignItems: 'center'

  },
  arrow: {
    color: 'white',
    fontSize: hp('4%'),
    marginHorizontal: wp('3%')
  },
  header: {
    backgroundColor: 'red',
    height: hp('9%'),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
},
  });

  export default Form;