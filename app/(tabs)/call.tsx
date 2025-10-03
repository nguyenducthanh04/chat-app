import { Feather, FontAwesome6 } from '@expo/vector-icons';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function CallScreen() {
  return (
   <ScrollView>
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <Text style={styles.headerTitle}>C.gọi</Text>
        <FontAwesome6 style={styles.headerIcon} name='ellipsis-vertical' size={25}/>
      </View>
    </View>
    <View style={styles.content}>
      <View style={styles.item}>
        <View style={styles.itemLeft}>
        <Image style={styles.accountAvatar} source={require("../../assets/images/avatar.jpg")}/>
        <View style={{marginLeft: 15}}>
          <Text style={{fontWeight: 500}}>Nguyen Duc Thanh</Text>
          <Text>26/9</Text>
        </View>
        </View>
        <Feather name="phone" size={25}/>
      </View>
       <View style={styles.item}>
        <View style={styles.itemLeft}>
        <Image style={styles.accountAvatar} source={require("../../assets/images/avatar.jpg")}/>
        <View style={{marginLeft: 15}}>
          <Text style={{fontWeight: 500}}>Nguyen Duc Thanh</Text>
          <Text>26/9</Text>
        </View>
        </View>
        <Feather name="phone" size={25}/>
      </View>
    </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 100,
    backgroundColor: 'brown'
  },
  headerContent: {
    marginTop: 45,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerTitle: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold"
  },
    headerIcon: {
    color: "white",
    marginRight: 10,
    marginTop: 10
  },
  content: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20
  },
  accountAvatar: {
    width: 50,
    height: 50,
    borderRadius: 90
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
