import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
im

const Comps = ({image,name,price}) => {
  return (
    <View
      style={{ marginVertical: 12, marginHorizontal: 20 }}
    >
      <View style={{ position: "relative" }}>
        <Image
          source={{ uri:image }}
          style={{
            width: 160,
            height: 130,
            resizeMode: "cover",
            borderRadius: 5,
          }}
        />
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 5,
            right: 5,
            zIndex: 1,
          }}
  
        >
          <Icon
            name={liked ? "heart" : "hearto"}
            size={24}
            color={liked ? "red" : "black"}
          />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 17,
          fontWeight: "bold",
          color: "black",
        }}
      >
        {name}
      </Text>
      <Text
        style={{
          textAlign: "center",
          textDecorationLine: "underline",
          fontWeight: "bold",
        }}
      >
        {price}
      </Text>

    </View>
  )
}

export default comps

const styles = StyleSheet.create({})