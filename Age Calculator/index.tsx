import { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";


export default function Index() {
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();
  const todayDate = today.getDate()
  const [textYear, setTextYear] = useState("");
  const [textMonth, setTextMonth] = useState("");
  const [textDate, setTextDate] = useState("");
  const [showText, setShowText] = useState("")

  function buttonHandler(){
    let age = todayYear - Number(textYear)
    const monthDiff = todayMonth - Number(textMonth)
    const dayDiff = todayDate - Number(textDate)

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)){
      age--;
    }

    setShowText("Your Age is "+String(age))
    setTextYear("");
    setTextMonth("");
    setTextDate("");
  }

  return (
    <View style={sty.outerContainer}>
      <View style={sty.titleContainer}>
        <Text style={sty.titleText}>Age Calculator</Text>
      </View>
      
      <View style={sty.todayContainer}>
        <Text style={sty.todayText}>Today : {todayDate} - {todayMonth} - {todayYear}</Text>
      </View>

      <View style={sty.TextBoxContainer}>
      <TextInput placeholder="Enter Birth Year" keyboardType="number-pad" onChangeText={(e) => setTextYear(e)} value={textYear} style={sty.inputTextBox}/>

      </View>

      <View style={sty.TextBoxContainer}>
      <TextInput placeholder="Enter Birth Month" keyboardType="number-pad" onChangeText={(e) => setTextMonth(e)} value={textMonth} style={sty.inputTextBox}/>
      </View>

      <View style={sty.TextBoxContainer}>
      <TextInput placeholder="Enter Birth Day" keyboardType="number-pad" onChangeText={(e) => setTextDate(e)} value={textDate} style={sty.inputTextBox}/>
      </View>
      
      <View style={sty.buttonContainar}>
        <Button title="Calculate" onPress={buttonHandler}/>
      </View>
      
      <View style={sty.showAge}>
        <Text style={sty.showAgeText}>{showText}</Text>
      </View>

    </View>
  );
}

const sty = StyleSheet.create({
  outerContainer:{
    display:"flex",
    justifyContent:"flex-start",
    padding:20,
    backgroundColor:"#4B0082",
    height:"100%"
  },
  titleContainer:{
    width:"100%",
    display:'flex',
    justifyContent:"center",
    alignItems:"center",
    borderRadius:5,
    backgroundColor:"#8F00FF"
  },
  titleText:{
    width:"100%",
    textAlign:"center",
    fontSize:25,
    padding:5,
    color:"white",
    fontWeight:"500"
  },
  todayContainer:{
    width:"100%",
    display:'flex',
    justifyContent:"center",
    alignItems:"center",
    marginTop:20,
    borderRadius:5,
    backgroundColor:"#C71585",
  },
  todayText:{
    fontSize:20,
    padding:5,
    color:"white",
    fontWeight:'600'
  },
  TextBoxContainer:{
    width:"100%",
    marginTop:20,
    borderRadius:5,
    backgroundColor:"white",
  },
  inputTextBox:{
    fontSize:18,
    padding:5,
    
    
  },
  buttonContainar:{
    width:"100%",
    marginTop:20,
    
  },
  showAge:{
    width:"100%",
    marginTop:20,
    borderRadius:5,
    backgroundColor:"#C71585",
  },
  showAgeText:{
    fontSize:20,
    padding:10,
    textAlign:"center",
    color:"white",
    fontWeight:"600"
    
  }

})
