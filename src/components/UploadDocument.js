import React from 'react';
import DocumentPicker from 'react-native-document-picker';
import {View, Text, TouchableOpacity} from 'react-native';
// Pick a single file
export default function UploadDocument() {
  async function openDocumentFile() {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      console.log(
        res.uri,
        res.type, // mime type
        res.name,
        res.size,
      );
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }

    // Pick multiple files
    try {
      const results = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.images],
      });
      for (const res of results) {
        console.log(
          res.uri,
          res.type, // mime type
          res.name,
          res.size,
        );
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  }
  return (
    <View>
      <TouchableOpacity onPress={() => openDocumentFile}>
        <Text
          style={{
            color: '#20b2aa',
            fontSize: 20,
          }}>
          ATTACH DOCUMENT
        </Text>
      </TouchableOpacity>
    </View>
  );
}
