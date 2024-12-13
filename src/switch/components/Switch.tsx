import { StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { BaseTouchableOpacity } from './BaseTouchableOpacity';
import { DEAFULT_DISABLED, DEFAULT_ACTIVE, DEFAULT_INACTIVE, DEFAULT_KNOB_ACTIVE, DEFAULT_KNOB_INACTIVE } from '../utils/colors';
import { DEFAULT_WIDTH, FINAL_ANIMATION_VALUE, INITIAL_ANIMATION_VALUE, KNOB_SIZE } from '../utils/consts';
import { enterAnimationConfig, exitAnimationConfig } from '../utils/animationConfig';
import { SwitchProps } from '../utils/types';

export const Switch = ({
    value,
    onValueChange,
    disabled,
    activeColor = DEFAULT_ACTIVE,
    inactiveColor = DEFAULT_INACTIVE,
    disabledColor = DEAFULT_DISABLED,
    knobActiveColor = DEFAULT_KNOB_ACTIVE,
    knobInactiveColor = DEFAULT_KNOB_INACTIVE
}: SwitchProps) => {
    const translateX = useSharedValue(value ? FINAL_ANIMATION_VALUE : INITIAL_ANIMATION_VALUE);

    const containerStyle = {
        backgroundColor: disabled ? disabledColor : value ? activeColor : inactiveColor,
    };

    const knobStyle = {
        backgroundColor: value ? knobActiveColor : knobInactiveColor
    }

    const handleChange = () => {
        translateX.value = withTiming(
            value ? INITIAL_ANIMATION_VALUE : FINAL_ANIMATION_VALUE,
            value ? enterAnimationConfig : exitAnimationConfig
        );
        onValueChange(!value);
    }

    const animatedKnobStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }]
    }));

    return (
        <BaseTouchableOpacity
            disabled={disabled}
            onPress={handleChange}
            style={[styles.container, containerStyle]}>
            <Animated.View style={[styles.circle, knobStyle, animatedKnobStyle]} />
        </BaseTouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: DEFAULT_WIDTH,
        aspectRatio: DEFAULT_WIDTH / 30,
        borderRadius: 30,
        paddingHorizontal: 4,
        justifyContent: 'center',
    },
    circle: {
        width: KNOB_SIZE,
        height: KNOB_SIZE,
        borderRadius: 60,
    }
});