// I need to add a new component that will be the main page of the app.


import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <View style={styles.headerContentLeft}>
                        <Image style={styles.headerImage} source={require('../assets/images/Profile.png')} />
                        <Text style={styles.headerText}>Hi, John</Text>
                    </View>
                    <View style={styles.headerContentRight}>
                        <TouchableOpacity style={styles.headerButton}>
                            <Text style={styles.headerButtonText}>Edit</Text>
                        </TouchableOpacity> 
                    </View>
                </View>
            </View>
            <View style={styles.body}>
                <ScrollView>
                    <View style={styles.bodyContent}>
                        <View style={styles.bodyContentTop}>
                            <View style={styles.bodyContentTopLeft}>
                                <Text style={styles.bodyContentTopLeftText}>Your Balance</Text>
                                <Text style={styles.bodyContentTopLeftText}>$ 1,000,000</Text>
                            </View>
                            <View style={styles.bodyContentTopRight}>
                                <TouchableOpacity style={styles.bodyContentTopRightButton}>
                                    <Text style={styles.bodyContentTopRightButtonText}>Add Money</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.bodyContentBottom}>
                            <View style={styles.bodyContentBottomLeft}>
                                <View style={styles.bodyContentBottomLeftTop}>
                                    <View style={styles.bodyContentBottomLeftTopLeft}>
                                        <Text style={styles.bodyContentBottomLeftTopLeftText}>Send Money</Text>
                                    </View>
                                    <View style={styles.bodyContentBottomLeftTopRight}>
                                        <TouchableOpacity style={styles.bodyContentBottomLeftTopRightButton}>
                                            <Text style={styles.bodyContentBottomLeftTopRightButtonText}>Send</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.bodyContentBottomLeftBottom}>
                                    <View style={styles.bodyContentBottomLeftBottomLeft}>
                                        <TouchableOpacity style={styles.bodyContentBottomLeftBottomLeftButton}>
                                            <Ionicons name="ios-arrow-back" size={24} color="black" />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.bodyContentBottomLeftBottomRight}>
                                        <TouchableOpacity style={styles.bodyContentBottomLeftBottomRightButton}>
                                            <Ionicons name="ios-arrow-forward" size={24} color="black" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>     
                            <View style={styles.bodyContentBottomRight}>
                                <View style={styles.bodyContentBottomRightTop}>
                                    <View style={styles.bodyContentBottomRightTopLeft}>
                                        <Text style={styles.bodyContentBottomRightTopLeftText}>Request Money</Text>
                                    </View>
                                    <View style={styles.bodyContentBottomRightTopRight}>
                                        <TouchableOpacity style={styles.bodyContentBottomRightTopRightButton}>
                                            <Text style={styles.bodyContentBottomRightTopRightButtonText}>Request</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.bodyContentBottomRightBottom}>
                                    <View style={styles.bodyContentBottomRightBottomLeft}>
                                        <TouchableOpacity style={styles.bodyContentBottomRightBottomLeftButton}>
                                            <Ionicons name="ios-arrow-back" size={24} color="black" />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.bodyContentBottomRightBottomRight}>
                                        <TouchableOpacity style={styles.bodyContentBottomRightBottomRightButton}>
                                            <Ionicons name="ios-arrow-forward" size={24} color="black" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>



