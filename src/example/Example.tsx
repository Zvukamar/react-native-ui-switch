import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Switch } from '../switch/components/Switch';

const Example = () => {
  const [value, onChangeValue] = useState(false);
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <Text>
          Active
        </Text>
        <Switch value={true} onValueChange={onChangeValue} />
      </View>

      <View style={styles.container}>
        <Text>
          Inactive
        </Text>
        <Switch value={false} onValueChange={onChangeValue} />
      </View>

      <View style={styles.container}>
        <Text>
          Custom active color
        </Text>
        <Switch
          value={true}
          onValueChange={onChangeValue}
          activeColor='red'
        />
      </View>

      <View style={styles.container}>
        <Text>
          Custom inactive color
        </Text>
        <Switch
          value={false}
          onValueChange={onChangeValue}
          inactiveColor='blue'
        />
      </View>

      <View style={styles.container}>
        <Text>
          Custom knob active color
        </Text>
        <Switch
          value={true}
          onValueChange={onChangeValue}
          knobActiveColor='blue'
        />
      </View>

      <View style={styles.container}>
        <Text>
          Custom knob inactive color
        </Text>
        <Switch
          value={false}
          onValueChange={onChangeValue}
          knobInactiveColor='yellow'
        />
      </View>

      <View style={styles.container}>
        <Text>
          Custom disabled color
        </Text>
        <Switch
          value={false}
          onValueChange={onChangeValue}
          disabled
          disabledColor='pink'
        />
      </View>

    </SafeAreaView>
  );
}

export default Example;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    gap: 14
  },
  container: {
    alignItems: 'center',
    gap: 4
  },
});
