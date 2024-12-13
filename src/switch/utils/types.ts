export interface SwitchProps {
    value: boolean;
    onValueChange: (nextValue: boolean) => void;
    disabled?: boolean;
    activeColor?: string;
    inactiveColor?: string;
    disabledColor?: string;
    knobActiveColor?: string;
    knobInactiveColor?: string;
}