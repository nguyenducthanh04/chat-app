import { FontAwesome6, Ionicons } from '@expo/vector-icons';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';


export default function ChatScreen() {
  return (
   <ScrollView style={styles.container}>
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <View>
          <Text style={styles.headerTitle}>Trò chuyện</Text>
        </View>
        <View style={styles.headerRight}>
          <FontAwesome6 style={styles.headerIcon} name='image' size={20}/>
          <FontAwesome6 style={styles.headerIcon} name='plus' size={20}/>
          <FontAwesome6 style={styles.headerIcon} name='ellipsis-vertical' size={20}/>
        </View>
      </View>
    </View>
    <View style={styles.content}>
      <View style={styles.search}>
        <Ionicons name="search" size={20} color="#888" style={styles.icon} />
        <TextInput style={styles.searchInput} placeholder='Tìm kiếm'/>
      </View>
      <View style={styles.messages}>
        <View style={styles.messageItem}>
         <View style={styles.messageItemLeft}>
           <Image style={styles.messageImage} source={require("../../assets/images/avatar.jpg")}/>
          <View style={styles.messageItemRight}>
            <Text>Nguyen Duc Thanh</Text>
            <Text style={styles.messageText}>好的</Text>
          </View>
         </View>
          <View>
            <Text style={{color: '#808080'}}>04:00 PM</Text>
            <Text style={{color: '#FF0000', fontWeight: 'bold'}}>2</Text>
          </View>
        </View>
        <View style={styles.messageItem}>
         <View style={styles.messageItemLeft}>
          <Image style={styles.messageImage} source={require("../../assets/images/saved.png")}/>
          <View style={{marginLeft: 12, width: '80%'}}>
            <Text>Ghi chú Keep</Text>
            <Text style={styles.messageText}>Gửi vào mọi văn bản, ảnh, video và link bạn muốn giữ riêng cho mình.</Text>
          </View>
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
    height: 100,
    backgroundColor: 'brown',
  },
  headerContent: {
    marginTop: 45,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold'
  },
  headerRight: {
    flexDirection: "row"
  },
  headerIcon: {
    color: "white",
    marginLeft: 20
  },
  content: {
    
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
  messages: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  messageImage: {
    width: 50,
    height: 50,
    borderRadius: 90
  },
  messageItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  messageText: {
    flexShrink: 1,       
    flexWrap: 'wrap',  
    color: "#808080"
  },
  messageItemLeft: {
    flexDirection: "row"
  },
  messageItemRight: {
    marginLeft: 12,
    width: '60%',
  }
});
