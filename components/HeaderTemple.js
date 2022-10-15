import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HeaderTemple = (temple) => {
  return (
    <Text style={styles.header}>{temple.temple}</Text>
  )
}

export default HeaderTemple

const styles = StyleSheet.create({
    header: {
        fontSize:18,
        fontFamily:'Kanit',
        padding:20,
        paddingBottom:0,
        alignSelf:'center',
        color:'#000'
      },
})