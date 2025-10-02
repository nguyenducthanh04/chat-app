import { Feather, FontAwesome, FontAwesome6, Ionicons } from '@expo/vector-icons';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';


export default function HomeScreen() {
  return (
        <ScrollView style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <View style={styles.headerButton}>
                <FontAwesome style={styles.buttonIcon} name='bookmark-o' size={20}/>
                <FontAwesome style={styles.buttonIcon} name='bell-o' size={20}/>
                <Feather style={styles.buttonIcon} name='user-plus' size={20}/>
                <Ionicons  style={styles.buttonIcon} name='settings-outline' size={20}/>
              </View>
              <View style={styles.accountInfo}>
                <View>
                  <Text style={styles.nameAccount}>NGUYEN DUC THANH</Text>
                  <Text style={styles.description}>很累</Text>
                </View>
                <View>
                  <Image source={require("../../assets/images/avatar.jpg")} style={styles.avatar}/>
                </View>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.search}>
              <Ionicons name="search" size={20} color="#888" style={styles.icon} />
              <TextInput style={styles.searchInput} placeholder='Tìm kiếm'/>
            </View>
            <View style={styles.content}>
              <View style={styles.serviceContainer}>
              <View style={styles.serviceTitle}>
                <Text style={{fontWeight: "bold"}}>Dịch vụ</Text>
                <Text style={{fontWeight: "300"}}>Xem toàn bộ</Text>
              </View>
              <View style={styles.service}>
                <View style={styles.serviceItem}>
                  <FontAwesome6 name='face-laugh' size={30}/>
                  <Text style={{marginTop: 10}}>Sticker</Text>
                </View>
                <View style={styles.serviceItem}>
                  <FontAwesome6 name='broom' size={30}/>
                  <Text style={{marginTop: 10}}>Theme</Text>
                </View>
                <View style={styles.serviceItem}>
                  <FontAwesome6 name='shield-cat' size={30}/>
                  <Text style={{marginTop: 10}}>TK chính thức</Text>
                </View>
              </View>
              </View>
              <View style={{marginTop: 50}}>
                <Text style={{fontWeight: "bold"}}>Nhóm 2</Text>
              </View>
              <View style={{marginTop: 20}}>
                <Text style={{fontWeight: "bold"}}>Bạn bè 3</Text>
              </View>
              <View style={styles.message}>
                <View style={styles.msgItem}>
                  <Image style={styles.messageAvatar} source={require("../../assets/images/avatar.jpg")}></Image>
                  <Text style={styles.nameAccountMsg}>Nguyen Duc Thanh</Text>
                </View>
                <View style={styles.msgItem}>
                  <Image style={styles.messageAvatar} source={require("../../assets/images/avatar.jpg")}></Image>
                  <Text style={styles.nameAccountMsg}>Nguyen Duc Thanh</Text>
                </View>
                <View style={styles.msgItem}>
                  <Image style={styles.messageAvatar} source={require("../../assets/images/avatar.jpg")}></Image>
                  <Text style={styles.nameAccountMsg}>Nguyen Duc Thanh</Text>
                </View>
              </View>
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
    backgroundColor: "brown",
    height: 165,
  },
  headerContent: {
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20
  },
  headerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: "flex-end"
  },
  buttonIcon: {
    paddingLeft: 15,
    color: "white"
  },
  accountInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    marginTop: 25
  },
  nameAccount: {
    fontSize: 20,
    fontWeight: 600,
    color: 'white'
  },
  description: {
    color: 'grey'
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 90
  },
  search: {
    flexDirection: "row",   
    alignItems: "center",
    backgroundColor: "#FFCC99",
    borderRadius: 8,
    paddingHorizontal: 10,  
    marginTop: 2,
    marginHorizontal: 20,   
  },
  icon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,              
    height: 40,
    fontSize: 16,
    color: "#fff",
  },
  content: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  serviceContainer: {
    marginTop: 20
  },
  service: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  serviceTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  serviceItem: {
    width: 100,
    marginTop: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  message: {
    marginTop: 30,
  },
  messageAvatar: {
    width: 50,
    height: 50,
    borderRadius: 90
  },
  msgItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25
  },
  nameAccountMsg: {
    fontSize: 15,
    marginLeft: 20,
    fontWeight: 500
  }
});
