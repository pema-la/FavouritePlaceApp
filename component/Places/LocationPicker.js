import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import OutlinedButton from '../UI/OutlinedButton'
import {getCurrentPositionAsync, useForegroundPermissions, PermissionStatus} from 'expo-location'


function LocationPicker() {
    const [locationPermissionInformation, requestPermission] = useForegroundPermissions();

    async function verifyPermissions(){
        if (
            locationPermissionInformation.status === PermissionStatus.UNDETERMINED
        ) {
            const permissionResponse = await requestPermission();
            return permissionResponse.granted;
        }

        if (locationPermissionInformation.status === PermissionStatus.DENIED){
            Alert.alert(
                'Insufficient Permissions!',
                'You need to grant location permission to use this app.'
            );
            return false;
        }
    }
    async function getLocationHandler(){
        const hasPermission = await verifyPermissions();
        if(!hasPermission){
            return;
        }
        const location = await getCurrentPositionAsync();
        console.log(location);
    }

    function pickOnMapHandler(){}

    return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.actions}>
          <OutlinedButton icon='location' onPress={getLocationHandler}>Locate User</OutlinedButton>
          <OutlinedButton icon="map" onPress={pickOnMapHandler}>Pick on Map</OutlinedButton>
      </View>
    </View>
  );
}

export default LocationPicker

const styles = StyleSheet.create({
    mapPreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
});