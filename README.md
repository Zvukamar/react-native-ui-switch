# Instructions
Please install dependencies:<br /> 
Follow the instuctions in the link.
- `react-native-reanimated`<br/>
https://docs.swmansion.com/react-native-reanimated/

# How to install
npm i react-native-ui-switch<br />
yarn add react-native-ui-switch<br />

# How to use
import { Switch } from 'react-native-ui-switch';<br/>
<Switch value={true} onValueChange={() => {}} /><br/>

# Props

    value: boolean; - required
    onValueChange: (nextValue: boolean) => void; - required
    disabled?: boolean; - optional
    activeColor?: string; - optional
    inactiveColor?: string; - optional
    disabledColor?: string; - optional
    knobActiveColor?: string; - optional
    knobInactiveColor?: string; - optional
