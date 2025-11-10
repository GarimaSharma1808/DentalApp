import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  ImageBackground,
} from 'react-native';
import {launchCamera} from 'react-native-image-picker';

const HomeScreen = ({navigation}) => {
  const handleScanPress = async () => {
    const options = {
      mediaType: 'photo',
      cameraType: 'back',
      saveToPhotos: true,
    };

    const result = await launchCamera(options);

    if (result.didCancel) {
      console.log('User cancelled camera');
    } else if (result.errorCode) {
      console.log('Camera error:', result.errorMessage);
    } else {
      const photoUri = result.assets?.[0]?.uri;
      console.log('📸 Captured Image URI:', photoUri);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* 🦷 Logo Fixed at Top Left */}
      <View style={styles.topLogoContainer}>
        <Text style={styles.logo}>
          STOMA<Text style={styles.aiText}>AI</Text>
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Background Section */}
        <ImageBackground
          source={require('./image2.png')}
          style={styles.backgroundImage}
          imageStyle={{borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}>
          <View style={styles.overlay}>
            {/* Profile */}
            <View style={styles.profileSection}>
              <View style={styles.profileLeft}>
                <Image
                  source={require('./AvatarBlock.png')}
                  style={styles.profileImage}
                />
              </View>

              <View style={styles.profileIcons}>
                <TouchableOpacity>
                  <Image
                    source={{
                      uri: 'https://cdn-icons-png.flaticon.com/512/1170/1170678.png',
                    }}
                    style={styles.icon}
                  />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image
                    source={{
                      uri: 'https://cdn-icons-png.flaticon.com/512/565/565422.png',
                    }}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Diagnosee */}
            <View style={styles.diagnoseSection}>
              <Text style={styles.diagnoseTitle}>DIAGNOSEE</Text>
              <Text style={styles.diagnoseSubtitle}>
                All in one solution for dental care
              </Text>
            </View>
          </View>
        </ImageBackground>

        {/* 🩺 Scan Section with overlapping style */}
        <View style={styles.scanWrapper}>
          <View style={styles.scanCard}>
            <Image source={require('./icons.png')} style={styles.scanIcon} />
            <View>
              <Text style={styles.scanTitle}>Scan</Text>
              <Text style={styles.scanSubtitle}>AI Scanner</Text>
            </View>
            <TouchableOpacity style={styles.scanArrow}>
              <Text style={styles.arrowText}>›</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 📅 Appointment Card */}
        <View style={styles.appointmentCard}>
          <View>
            <Text style={styles.appointmentTitle}>Book</Text>
            <Text style={styles.appointmentSubtitle}>Appointment</Text>
          </View>

          <ImageBackground
            source={require('./Ellipse3.png')}
            style={styles.calendarBackground}
            imageStyle={styles.calendarBgImage}>
            <Image source={require('./callender.png')} style={styles.calendarIcon} />
          </ImageBackground>
        </View>

        {/* 📊 Insights Header */}
        <View style={styles.insightsHeader}>
          <View style={styles.insightsLine} />
          <Text style={styles.insightsTitle}>Insights</Text>
          <View style={styles.insightsLine} />
        </View>

        {/* Insights Cards */}
        <View style={styles.insightsContainer}>
          <View style={[styles.insightCard, {backgroundColor: '#4A90E2'}]}>
            <Text style={styles.cardTitle}>Articles</Text>
            <Image
              source={require('./articles.png')}
              style={styles.cardIcon}
            />
          </View>

          <View style={[styles.insightCard, {backgroundColor: '#E74C3C'}]}>
            <Text style={styles.cardTitle}>Videos</Text>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png',
              }}
              style={styles.cardIcon}
            />
          </View>

          <View style={[styles.insightCard, {backgroundColor: '#A143B8'}]}>
            <Text style={styles.cardTitle}>Podcast</Text>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/2111/2111628.png',
              }}
              style={styles.cardIcon}
            />
          </View>
        </View>
      </ScrollView>

      {/* ⚙️ Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/1946/1946436.png',
            }}
            style={styles.navIcon}
          />
        </TouchableOpacity>

        {/* <View style={styles.centerButton}>
          <TouchableOpacity style={styles.scanButton} onPress={handleScanPress}>
            <Image
              Image
              source={require('./Scantheeth.png')}
              style={styles.centerIcon}
            />
            <Text style={styles.scanText}>Scan</Text>
          </TouchableOpacity>
        </View> */}


 <View style={styles.centerButton}>
  <TouchableOpacity
    style={styles.scanButton}
    onPress={() => navigation.navigate('Scan')}>
    <Image
      source={require('./Scantheeth.png')}
      style={styles.centerIcon}
    />
    <Text style={styles.scanText}>Scan</Text>
  </TouchableOpacity>
</View>

        <TouchableOpacity style={styles.navItem}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/3524/3524659.png',
            }}
            style={styles.navIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#ffffff'},

  topLogoContainer: {alignItems: 'flex-start', marginLeft: 20, marginBottom: 30},
  logo: {fontSize: 28, fontWeight: '800', color: '#002855'},
  aiText: {color: '#ff2d55'},

  backgroundImage: {width: '100%', height: 200, justifyContent: 'center'},
  overlay: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    height: '100%',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },

  profileSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileLeft: {flexDirection: 'row', alignItems: 'center'},
  profileImage: {width: 268, height: 44},
  profileIcons: {flexDirection: 'row', gap: 15},
  icon: {width: 41, height: 35, tintColor: '#000'},

  diagnoseSection: {marginTop: 15},
  diagnoseTitle: {fontSize: 24, fontWeight: '700', color: '#111'},
  diagnoseSubtitle: {fontSize: 14, color: '#0e0404e0'},

  // 🩺 Scan card (moved upward)
  scanWrapper: {
    alignItems: 'center',
    marginTop: -40, // overlap the background
    zIndex: 5,
  },
  scanCard: {
    backgroundColor: '#D9D9D9',
    width: 340,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 40,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 50,
    elevation: 6,
  },
  scanIcon: {width: 120, height: 70, marginRight: 20},
  scanTitle: {fontSize: 18, fontWeight: '700', color: '#111'},
  scanSubtitle: {fontSize: 14, color: '#555'},
  scanArrow: {
    marginLeft: 'auto',
    backgroundColor: '#111',
    borderRadius: 20,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowText: {color: '#fff', fontSize: 20, fontWeight: '700'},

  appointmentCard: {
    backgroundColor: '#2C3E50',
    width: '50%',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 20,
  },
  appointmentTitle: {color: '#fff', fontSize: 18, fontWeight: '700'},
  appointmentSubtitle: {color: '#fff', fontSize: 12},
  calendarIcon: {width: 70, height: 60},
  calendarBackground: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendarBgImage: {resizeMode: 'contain'},

  insightsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  insightsLine: {flex: 1, height: 2, backgroundColor: '#e0e0e0'},
  insightsTitle: {marginHorizontal: 12, fontSize: 16, fontWeight: '700', color: '#555'},

  insightsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
    marginBottom: 80,
  },
  insightCard: {
    width: 100,
    height: 100,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {color: '#f2e9e9ff', fontWeight: '700', marginBottom: 8},
  cardIcon: {width: 40, height: 40},

  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
  },
  navItem: {alignItems: 'center', justifyContent: 'center'},
  navIcon: {width: 26, height: 26, tintColor: '#000'},
  centerButton: {
    backgroundColor: '#1e293b',
    width: 70,
    height: 70,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 5,
    elevation: 10,
  },
  scanButton: {alignItems: 'center'},
  centerIcon: {width: 30, height: 30, tintColor: '#fff', marginBottom: 4},
  scanText: {color: '#b2a2a2ff', fontSize: 12},
});
