import { View, Text, TouchableOpacity } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import countryCodes from 'country-codes-list';

import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import React from 'react';

export const PhoneCountriesDropdown = ({
  onChangeCountry,
  visibleCountries,
}: TPhoneCountriesDropdown) => {
  const allCountriesList = countryCodes.all();

  {
    return (
      visibleCountries && (
        <View style={[styles.list]}>
          <FlashList
            estimatedListSize={{ height: 200, width: 66 }}
            showsVerticalScrollIndicator={false}
            renderScrollComponent={(props) => <ScrollView {...props} />}
            data={allCountriesList}
            estimatedItemSize={10}
            keyExtractor={(item) => item.countryCode}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => onChangeCountry(`${item.countryCallingCode}`)}>
                <Text style={styles.phoneNumber}>
                  +{item.countryCallingCode}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )
    );
  }
};

type TPhoneCountriesDropdown = {
  onChangeCountry: (country: string) => void;
  visibleCountries: boolean;
};
