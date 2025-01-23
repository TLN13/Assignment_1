import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';

const TwitchBrowse = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <View style={styles.searchInputContainer}>
          <Image style={styles.searchIcon} source={require('./assets/search-white.png')} />
          <View style={styles.searchInput}>
            <Text style={styles.searchText}>Search</Text>
          </View>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabBar}>
        <View style={styles.tabsLeft}>
          <Text style={styles.activeTab}>Categories</Text>
          <Text style={styles.tab}>Live Channels</Text>
        </View>
        <Text style={styles.menuIcon}>≡</Text>
      </View>

      {/* Content Grid */}
      <ScrollView>
        <View style={styles.grid}>
          {/* Just Chatting */}
          <View style={styles.card}>
            <Image style={styles.thumbnail} source={require('./assets/JS.jpg')} />
            <Text style={styles.title}>Just Chatting</Text>
            <View style={styles.viewerRow}>
              <View style={styles.dot} />
              <Text style={styles.viewers}>450K</Text>
            </View>
            <View style={styles.tagContainer}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>IRL</Text>
              </View>
            </View>
          </View>

          {/* Marvel Rivals */}
          <View style={styles.card}>
            <Image style={styles.thumbnail} source={require('./assets/QuestionMark.jpg')} />
            <Text style={styles.title}>Marvel Rivals</Text>
            <View style={styles.viewerRow}>
              <View style={styles.dot} />
              <Text style={styles.viewers}>91K</Text>
            </View>
            <View style={styles.tagContainer}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Shooter</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Action</Text>
              </View>
            </View>
          </View>

          {/* More cards following the same pattern */}
          {/* World of Warcraft */}
          <View style={styles.card}>
            <Image style={styles.thumbnail} source={require('./assets/QuestionMark.jpg')} />
            <Text style={styles.title}>World of Warcraft</Text>
            <View style={styles.viewerRow}>
              <View style={styles.dot} />
              <Text style={styles.viewers}>69K</Text>
            </View>
            <View style={styles.tagContainer}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>RPG</Text>
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <Image style={styles.thumbnail} source={require('./assets/QuestionMark.jpg')} />
            <Text style={styles.title}>To be Determined</Text>
            <View style={styles.viewerRow}>
              <View style={styles.dot} />
              <Text style={styles.viewers}>42K</Text>
            </View>
            <View style={styles.tagContainer}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Idk</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Random</Text>
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <Image style={styles.thumbnail} source={require('./assets/QuestionMark.jpg')} />
            <Text style={styles.title}>To be Determined</Text>
            <View style={styles.viewerRow}>
              <View style={styles.dot} />
              <Text style={styles.viewers}>42K</Text>
            </View>
            <View style={styles.tagContainer}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Idk</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Random</Text>
              </View>
            </View>
          </View>
        
          <View style={styles.card}>
            <Image style={styles.thumbnail} source={require('./assets/QuestionMark.jpg')} />
            <Text style={styles.title}>To be Determined</Text>
            <View style={styles.viewerRow}>
              <View style={styles.dot} />
              <Text style={styles.viewers}>42K</Text>
            </View>
            <View style={styles.tagContainer}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Idk</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Random</Text>
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <Image style={styles.thumbnail} source={require('./assets/QuestionMark.jpg')} />
            <Text style={styles.title}>To be Determined</Text>
            <View style={styles.viewerRow}>
              <View style={styles.dot} />
              <Text style={styles.viewers}>42K</Text>
            </View>
            <View style={styles.tagContainer}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Idk</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Random</Text>
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <Image style={styles.thumbnail} source={require('./assets/QuestionMark.jpg')} />
            <Text style={styles.title}>To be Determined</Text>
            <View style={styles.viewerRow}>
              <View style={styles.dot} />
              <Text style={styles.viewers}>42K</Text>
            </View>
            <View style={styles.tagContainer}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Idk</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Random</Text>
              </View>
            </View>
          </View>
        
          <View style={styles.card}>
            <Image style={styles.thumbnail} source={require('./assets/QuestionMark.jpg')} />
            <Text style={styles.title}>To be Determined</Text>
            <View style={styles.viewerRow}>
              <View style={styles.dot} />
              <Text style={styles.viewers}>42K</Text>
            </View>
            <View style={styles.tagContainer}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Idk</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Random</Text>
              </View>
            </View>
          </View>
          
          <View>
            <TouchableOpacity style={styles.alertButton} onPress ={()=>{alert("Good Job")}}>
              <Text style={styles.alertText}>
                Click me
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Image style={styles.navIcon} source={require('./assets/house.png')} />
          <Text style={styles.navText}>Home</Text>
        </View>
        <View style={styles.navItem}>
          <Image style={[styles.navIcon,]} source={require('./assets/search.png')} />
          <Text style={[styles.navText, styles.activeNav]}>Browse</Text>
        </View>
        <View style={styles.navItem}>
          <View style={styles.plusButton}>
            <Text style={styles.plusIcon}>+</Text>
          </View>
        </View>
        <View style={styles.navItem}>
          <Image style={styles.navIcon} source={require('./assets/bell.png')} />
          <Text style={styles.navText}>Activity</Text>
        </View>
        <View style={styles.navItem}>
          <Image style={styles.profileIcon} source={require('./assets/profile-user.png')} />
          <Text style={styles.navText}>Profile</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  searchBar: {
    padding: 8,
  },
  searchText: {
    color: '#8E8E8E',
    fontSize: 16,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 8,
    marginTop: 10, 
  },
  tabsLeft: {
    flexDirection: 'row',
    gap: 24,
  },
  activeTab: {
    color: '#BF94FF',
    fontSize: 16,
    fontWeight: '600',
    borderBottomWidth: 2,
    borderBottomColor: '#BF94FF',
    paddingBottom: 8,
  },
  tab: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    paddingBottom: 8,
  },
  menuIcon: {
    color: 'white',
    fontSize: 35,
    marginTop: -10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 4,
  },
  card: {
    width: '33.33%',
    padding: 4,
  },
  thumbnail: {
    height: 167, 
    width: 70,
    aspectRatio: 0.75,
    backgroundColor: '#1F1F23',
    borderRadius: 4,
  },
  title: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 4,
  },
  viewerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'red',
    marginRight: 4,
  },
  viewers: {
    color: '#8E8E8E',
    fontSize: 13,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    marginTop: 4,
  },
  tag: {
    backgroundColor: '#2D2D2D',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  tagText: {
    color: '#8E8E8E',
    fontSize: 12,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#2D2D2D',
    paddingVertical: 8,
    marginBottom: 10,
  },
  navItem: {
    alignItems: 'center',
    flex: 1,
  },
  navIcon: {
    width: 24,
    height: 24,
  },
  navText: {
    color: '#EFEFF1',
    fontSize: 12,
    marginTop: 2,
  },
  activeNav: {
    color: '#BF94FF',
  },
  plusButton: {
    width: 75,
    height: 44,
    backgroundColor: '#1F1F23',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIcon: {
    color: 'white',
    fontSize: 24,
  },
  searchInput: {
    backgroundColor: '#1F1F23',
    borderRadius: 8,
    padding: 7,
    height: 36,
    flex: 1, 
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 20,
    tintColor: '#FFFFFF', 
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12, 
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
  profileIcon:{
    tintColor: '#FFFFFF',
    width: 24,
    height: 24,
  },
  alertButton:{
    width: 225,
    height: 50,
    backgroundColor: '#1F1F23',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 90,
  },
  alertText:{
    color: '#8E8E8E',
    fontSize: 15,
    fontWeight: 'bold',
  }
});

export default TwitchBrowse;
