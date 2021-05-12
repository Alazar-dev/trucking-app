import React, {useState} from 'react';
import {
  CheckBox,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const TermsAndConditions = (props) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <View>
      <ScrollView>
        <StatusBar backgroundColor={'#F9FAFA'} barStyle={'dark-content'} />
        <KeyboardAvoidingView>
          <Text style={styles.headerText}>Terms and Conditions</Text>
          <View>
            <Text style={styles.bodyText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              enim eros, accumsan eu sapien a, bibendum sollicitudin quam. Fusce
              pellentesque augue lacus, eu euismod augue vehicula vel. Nunc non
              suscipit urna, sed fermentum massa. Morbi porttitor finibus augue,
              ut blandit nulla interdum a. Nulla eget posuere leo. Cras id
              gravida dui. Fusce a nulla eget leo pretium sollicitudin. Aenean
              porta fringilla sagittis. Integer porta sem risus, sit amet
              gravida purus bibendum vel. Curabitur id ornare nisl, ac mattis
              purus. Proin congue elit at dui fringilla tempor. Curabitur a
              tortor consequat, finibus nisl sit amet, bibendum neque. Vivamus
              maximus sit amet purus vel ultricies. Ut ullamcorper ultricies
              lacus et tristique. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Ut rhoncus erat nisi,
              eu pharetra dui fringilla a. Donec porttitor lacinia lacinia. Sed
              ullamcorper vestibulum suscipit. Phasellus sit amet ipsum vel urna
              varius interdum vitae et sem. Vestibulum suscipit ut dui non
              tempus. Suspendisse tempor ullamcorper nunc, et dapibus ligula
              blandit in. Nulla quis mi eu mi aliquam blandit sed a est. Nam eu
              tempor nunc, vel iaculis eros. Nulla imperdiet erat quis lorem
              vehicula, id cursus odio aliquam.
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginLeft: '25%'}}>
            <View style={{flex: 1, marginLeft: 30}}>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
              />
            </View>
            <View style={{flex: 6}}>
              <Text style={{fontSize: 20}}>I Agree</Text>
            </View>
          </View>
          {isSelected ? (
            <TouchableOpacity
              disabled={false}
              onPress={() => props.navigation.navigate('SMSVerify')}
              style={styles.buttonStyle}
              activeOpacity={0.5}>
              <Text style={styles.buttonTextStyle}>CONTINUE</Text>
            </TouchableOpacity>
          ) : null}
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    textAlign: 'center',
    padding: '10%',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bodyText: {
    display: 'flex',
    padding: 15,
    textAlign: 'left',
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: '#20b2aa',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 50,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
    justifyContent: 'center',
  },
  buttonTextStyle: {
    color: '#000000',
    paddingVertical: 10,
    fontSize: 18,
  },
});

export default TermsAndConditions;
