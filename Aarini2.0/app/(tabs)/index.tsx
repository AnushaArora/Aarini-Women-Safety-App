// import { Image, StyleSheet, Platform } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Welcome!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({
//               ios: 'cmd + d',
//               android: 'cmd + m',
//               web: 'F12'
//             })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//         <ThemedText>
//           Tap the Explore tab to learn more about what's included in this starter app.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           When you're ready, run{' '}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });

import { Image, StyleSheet, Platform, View, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <ThemedText style={styles.headerTitle}>Aarini</ThemedText>
        <View style={styles.headerNav}>
          <ThemedText style={styles.navItem}>Home</ThemedText>
          <ThemedText style={styles.navItem}>Safety Map</ThemedText>
          <ThemedText style={styles.navItem}>SOS</ThemedText>
          <ThemedText style={styles.navItem}>Safe Route</ThemedText>
          <ThemedText style={styles.navItem}>Smartwatch</ThemedText>
          <ThemedText style={styles.navItem}>Rideshare</ThemedText>
          <ThemedText style={styles.navItem}>Community</ThemedText>
        </View>
      </View>

      <ScrollView style={styles.content}>
        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <ThemedText style={styles.welcomeTitle}>Welcome to Aarini: Mahila Suraksha Kavach</ThemedText>
          <ThemedText style={styles.welcomeSubtitle}>
            Empowering women through community-driven safety solutions
          </ThemedText>
        </View>

        {/* Safety Map Section */}
        <View style={styles.mapSection}>
          <ThemedText style={styles.sectionTitle}>Explore Safety Map</ThemedText>
          <Image
            source={{
              uri: "https://sjc.microlink.io/WRxW1DNKFMQMTCU1veRBCVqDfilvFfmhf5KU9m22K_Nhvwkmoa0UiCUU_xI6z3ydG2HytQaKdfyfx9uJKbOA0w.jpeg",
            }}
            style={styles.mapImage}
          />
        </View>

        {/* Features Grid */}
        <View style={styles.featuresGrid}>
          <View style={styles.featureCard}>
            <View style={styles.featureIconContainer}>
              <ThemedText style={styles.featureIcon}>🛡️</ThemedText>
            </View>
            <ThemedText style={styles.featureTitle}>Women's Protection</ThemedText>
          </View>

          <View style={styles.featureCard}>
            <View style={styles.featureIconContainer}>
              <ThemedText style={styles.featureIcon}>🗺️</ThemedText>
            </View>
            <ThemedText style={styles.featureTitle}>Interactive Safety Map</ThemedText>
          </View>

          <View style={styles.featureCard}>
            <View style={styles.featureIconContainer}>
              <ThemedText style={styles.featureIcon}>🆘</ThemedText>
            </View>
            <ThemedText style={styles.featureTitle}>SOS Emergency Feature</ThemedText>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#6B0F9C",
    padding: 16,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  headerNav: {
    flexDirection: "row",
    marginTop: 8,
    gap: 16,
  },
  navItem: {
    color: "#fff",
    fontSize: 14,
  },
  content: {
    flex: 1,
  },
  welcomeSection: {
    padding: 24,
    alignItems: "center",
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  welcomeSubtitle: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 8,
    color: "#666",
  },
  mapSection: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  mapImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
  },
  featuresGrid: {
    padding: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    justifyContent: "space-between",
  },
  featureCard: {
    width: "30%",
    alignItems: "center",
    gap: 8,
  },
  featureIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },
  featureIcon: {
    fontSize: 24,
  },
  featureTitle: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "500",
  },
})


