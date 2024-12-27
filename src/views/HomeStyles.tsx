import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e8e8e8',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    container2: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonView:{
      margin: 30,
      padding:10,
      borderRadius: 10,
      backgroundColor: '#ccc',
      borderWidth: 2,
      borderColor: 'black'
    },
    textButton:{
      fontWeight: '700',
      fontSize: 18,
      color: '#923',
    },
    input:{
      borderWidth: 2,
      borderColor: 'black',
      borderRadius:5,
      width:300,
      backgroundColor: '#cbcbdc',
      marginBottom:15
    }
  });

  
export default styles