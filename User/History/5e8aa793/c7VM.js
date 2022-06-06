import { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import * as e from '../../AppComponents'
import { LinearGradient } from 'expo-linear-gradient';
import { Animated,Alert, Keyboard, Dimensions } from 'react-native'
import { WaveIndicator } from 'react-native-indicators'
import * as Animatable from 'react-native-animatable'
const Dashboard = ({navigation}) =>{
    const [options,setOptions] = useState([])
    const [insertingStatus, setInsertingStatus] = useState(false)
    const opacity = useState(new Animated.Value(0))[0]
    const [newOption, setNewOption] = useState('')
    const [addVal, setAddVal]=useState('+')
    const [modalStatus, setModalStatus]=useState(false)
    const fadeIn = (prop) =>{
        Animated.timing(prop, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true
        }).start()
    }
 const fadeOut = (prop) =>{
        Animated.timing(prop, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true
        }).start()
    }
  return (
      <e.MainView>
          <e.LogoView>
<e.Logo name="hands-helping" size={27} color="white" />
<e.LogoText>Support Decisions</e.LogoText>
<e.AddTouchable onPress={()=>{
    setModalStatus(true)
    Keyboard.dismiss()
}}><e.MenuList name="menu-open" size={33} color="white" /></e.AddTouchable>
          </e.LogoView>
          <e.AddTouchable onPress={()=>{
              insertingStatus === true ? fadeOut(opacity) : fadeIn(opacity)
              if(insertingStatus === true){
                  setAddVal('+')
        setTimeout(() => {
              setInsertingStatus(props=> !props)
        }, 400);
              }else if(insertingStatus === false){
                  setAddVal('X')
              setInsertingStatus(props=> !props)
              }
          }}>
    <LinearGradient
    colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
    start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
    style={{ height: 40, alignItems: 'center', justifyContent: 'center', width: 40, borderRadius: 100, marginLeft:30, marginTop:35}}
>
              <e.AddOptionText>
                 {addVal}
              </e.AddOptionText>
          </LinearGradient>
</e.AddTouchable>
          {insertingStatus === true ? <Animated.View style={[{opacity}]}>
              <e.AddOptionView>
            <e.AddOptionInputForm>
                <e.AddOptionInput onChangeText={(prop)=>{
                    setNewOption(prop)
                }} placeholderTextColor="#888" placeholder={`Decision ${options.length+1}`}/>
                <e.AddTouchable onPress={()=>{
                    newOption != '' ? 
                    setOptions(options => [...options, newOption])
                    :
                    setOptions(options => [...options, 'undefined'])
                    setNewOption('')
                }}><e.AddOptionSvg name="md-paper-plane-sharp" size={28} color="white" /></e.AddTouchable>
            </e.AddOptionInputForm>
</e.AddOptionView>
          </Animated.View> : null}
          <e.CenteredView>
<LinearGradient
    colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
    start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
    style={{ height: 57, width: 200, alignItems: 'center', justifyContent: 'center', width: 200, borderRadius: 100}}
>
    <Animatable.View animation='fadeInUp'>
                  <e.GenerateAnswer onPress={()=>{
              if(options.length === 0){
              Alert.alert(null,'Error xcf59 * List is empty')
              }else{
                  if(options.length === 1){
                      Alert.alert(null,'Error cfxf5s0000 * List must be bigger than 1, please add more decisions!')
                  }
                  if(options.length >= 2){
                  navigation.navigate('Decision',{
                      decisions:options
                  })
                  }
              }
          }}>
              <e.GenerateAnswerText>
                  TAKE DECISION
              </e.GenerateAnswerText>
          </e.GenerateAnswer>
</Animatable.View>
          </LinearGradient>
          </e.CenteredView>
       <e.ModalV deviceHeight={Dimensions.get('window').height+20} animationIn="slideInUp" isVisible={modalStatus}>
               <e.AddTouchable onPress={()=>{
                   setModalStatus(false)
               }}><e.ModalViewBehind/></e.AddTouchable>
              <e.ModalView>
                  <e.ScrollModal overScrollMode={'never'}>
                      {options.length === 0 ? 
                    <e.EmptyOptions>
                        <WaveIndicator size={52} color={'#fff'}/>
                          <e.EmptyOptionsText>Waiting while adding some decisions...</e.EmptyOptionsText>
                      </e.EmptyOptions>
                        : null  
                    }
                {options.map((value,KEY) => {
                    return(
                        <e.OptionModal key={KEY}>
                            <e.OptionOption>{value}</e.OptionOption>
                            <e.AddTouchable onPress={()=>{
                                    Alert.alert(
                                        null,
                                        `Are you sure you want to remove ${value} decision?`,
                                        [
                                          {
                                            text: "Cancel",
                                            style: "cancel"
                                          },
                                          { text: "OK", onPress: () =>{
                                            setOptions(options.filter(options=> options !== value));
                                          }
                                        }
                                        ]
                                      );
                                
                            }}><e.OptionRemove name="md-trash-sharp" size={26} color="#FF3B3B" /></e.AddTouchable>
                        </e.OptionModal>
                    )
                })}
                </e.ScrollModal>
              </e.ModalView>
          </e.ModalV>
      </e.MainView>
  );
}
export default Dashboard;