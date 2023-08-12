import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { WebView } from "react-native-webview";

class App extends Component {
  state = {
    count: 0,
    webViewVisible: false,
    sidebarVisible: false,
    newURL: "https://dpsmap.com",
    newURLVisible: true,
    copyrightText: "© 2023 DPS Map",

    addressURL: "https://map.dpsmap.com/session/",
    addressURLVisible: true,

    mapdirURL: "https://dpsmap.com/mapdirectory",
    mapdirURLVisible: true,

    mapdownloadURL: "https://dpsmap.com/pages/map-download/",
    mapdownloadURLVisible: true,

    shopdpsURL: "https://shop.dpsmap.com/",
    shopdpsURLVisible: true,
  };

  openURL = () => {
    Linking.openURL("https://dpsmap.com/mapdirectory");
  };

  openNewURL = () => {
    Linking.openURL(this.state.newURL);
  };

  openaddressURL = () => {
    Linking.openURL(this.state.addressURL);
  };

  openmapdirURL = () => {
    Linking.openURL(this.state.mapdirURL);
  };

  openmapdownloadURL = () => {
    Linking.openURL(this.state.mapdownloadURL);
  };

  openshopdpsURL = () => {
    Linking.openURL(this.state.shopdpsURL);
  };

  toggleSidebar = () => {
    this.setState((prevState) => ({
      sidebarVisible: !prevState.sidebarVisible,
    }));

    toggleWebView = () => {
      this.setState((prevState) => ({
        webViewVisible: !prevState.webViewVisible,
      }));
    };

    const refreshContent = () => {
      this.setState({
        count: 0, // Reset the count if needed
        sidebarVisible: false,
        newURLVisible: true,
        // Perform other state updates or actions to refresh the content
      });
    };
    closeSidebar = () => {
      this.setState({
        sidebarVisible: false,
      });
    };
  };

  render() {
    const {
      sidebarVisible,
      webViewVisible,
      newURLVisible,
      addressURLVisible,
      mapdirURLVisible,
      mapdownloadURLVisible,
      shopdpsURLVisible,
      copyrightText,
    } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.companyName}>DPS Mapdirectory</Text>
          <View style={styles.loginSignupButtons}>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signupButton}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentText}>Welcome to our app!</Text>
          <TouchableOpacity style={styles.urlButton} onPress={this.openURL}>
            <Icon name="globe" size={20} color="white" style={styles.icon} />
            <Text style={styles.urlButtonText}>Open URL</Text>
          </TouchableOpacity>
          {webViewVisible && (
            <WebView source={{ uri: this.state.newURL }} style={{ flex: 1 }} />
          )}
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.footerLeft}
            onPress={this.refreshContent}
          >
            <Icon
              name="home"
              size={20}
              color="black"
              style={styles.footerIcon}
            />
            <Text style={styles.footerText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.footerLeft}
            onPress={this.toggleSidebar}
          >
            <Icon
              name="bars"
              size={20}
              color="black"
              style={styles.footerIcon}
            />
            <Text style={styles.footerText}>Menu</Text>
          </TouchableOpacity>
        </View>
        {sidebarVisible && (
          <View style={styles.sidebar}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={this.closeSidebar}
            >
              <Icon
                name="times"
                size={20}
                color="black"
                style={styles.footerIcon}
              />
            </TouchableOpacity>
            <Text style={styles.sidebarText}>Sidebar Content</Text>
            <TouchableOpacity
              style={styles.sidebarButton}
              onPress={this.openNewURL}
            >
              <Icon
                name="globe"
                size={20}
                color="black"
                style={styles.footerIcon}
              />
              <Text style={styles.sidebarButtonText}>dps map</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.sidebarButton}
              onPress={this.openaddressURL}
            >
              <Icon
                name="location-arrow"
                size={20}
                color="black"
                style={styles.footerIcon}
              />
              <Text style={styles.sidebarButtonText}>Address DPS</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.sidebarButton}
              onPress={this.openmapdirURL}
            >
              <Icon
                name="map"
                size={20}
                color="black"
                style={styles.footerIcon}
              />
              <Text style={styles.sidebarButtonText}>Map Directory</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.sidebarButton}
              onPress={this.openmapdownloadURL}
            >
              <Icon
                name="download"
                size={20}
                color="black"
                style={styles.footerIcon}
              />
              <Text style={styles.sidebarButtonText}>Free Map Download</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.sidebarButton}
              onPress={this.openshopdpsURL}
            >
              <Icon
                name="shopify"
                size={20}
                color="black"
                style={styles.footerIcon}
              />
              <Text style={styles.sidebarButtonText}>Shop GPS & Map</Text>
            </TouchableOpacity>

            <View style={styles.sidebarFooter}>
              <Text style={styles.copyrightText}>{copyrightText}</Text>
            </View>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: "#007AFF",
  },
  companyName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginSignupButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "#EFEFEF",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 80,
    marginRight: 10,
  },
  signupButton: {
    backgroundColor: "#EFEFEF",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 80,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentText: {
    fontSize: 24,
    marginBottom: 20,
  },
  urlButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 8,
  },
  urlButtonText: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderTopWidth: 0,
    borderTopColor: "white",
    backgroundColor: "#007AFF",
  },
  footerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  footerIcon: {
    marginRight: 10,
    color: "white",
  },
  footerText: {
    fontWeight: "bold",
    color: "white",
  },
  sidebar: {
    position: "absolute",
    left: 0,
    top: 92,
    bottom: 0,
    width: 250,
    backgroundColor: "#333333",
    elevation: 400,
    padding: 20,
  },
  sidebarText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  sidebarButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
  },
  sidebarButtonText: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 10,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 10,
    zIndex: 1,
  },
  sidebarFooter: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: "center",
  },
  copyrightText: {
    fontSize: 12,
    color: "#007AFF",
  },
});

export default App;
