import { PropsWithChildren } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface BaseTouchableOpacityProps extends TouchableOpacityProps { }

export const BaseTouchableOpacity = ({ onPress, disabled, style, children, ...props }: PropsWithChildren<BaseTouchableOpacityProps>) => {
    return (
        <TouchableOpacity
            {...props}
            onPress={onPress}
            disabled={disabled}
            hitSlop={{ right: 10, left: 10, top: 10, bottom: 10 }}
            style={style}
            activeOpacity={0.7}>
            {children}
        </TouchableOpacity>
    )
}