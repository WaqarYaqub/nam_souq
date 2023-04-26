// import React from "react";
// import { TouchableOpacity, View, StyleSheet, Text, Image } from "react-native";

// const Card = ({ onPress, item }) => {
//   return (
//     <TouchableOpacity
//       style={[styles.button, styles.shadowProp]}
//       onPress={onPress}
//     >
//       <View style={styles.container}>
//         <Text>{item.title}</Text>
//         <Text style={{ color: "green" }}>Up to {item.off}% off </Text>
//         <Image
//           style={{ width: 110, height: 80 }}
//           source={{
//             uri: item.url,
//           }}
//         />
//       </View>
//     </TouchableOpacity>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     justifyContent: "space-between",
//     flexDirection: "column",
//     padding: 10,
//   },
//   button: {
//     alignItems: "center",
//     backgroundColor: "white",
//     width: 110,
//     height: 100,
//     shadowColor: "black",
//     borderRadius: 10,
//     marginBottom: 30,
//   },
//   shadowProp: {
//     shadowColor: "#171717",
//     shadowOffset: { width: -2, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//   },
//   countContainer: {
//     alignItems: "center",
//     padding: 10,
//   },
// });
// export default Card;

import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';

const Card = ({onPress, item})=> {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        style={styles.thumb}
        source={{
          uri: item.url,
        }}      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.title}</Text>
        <Text style={styles.price}>Up to {item.off}% off</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    // marginVertical: 10,
    height: "100%"
  },
  thumb: {
    height: 120,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: '100%',
  },
  infoContainer: {
    padding: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    // fontWeight: '600',
    // marginBottom: 8,
    color: 'green'
  },
});

export default Card;