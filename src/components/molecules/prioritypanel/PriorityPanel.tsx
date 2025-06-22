import React from 'react';
import { View } from 'react-native';
import CheckboxWithText from '../../atoms/CheckboxWithText/CheckboxWithText';
import { styles } from './PriorirtyPanel.styles';

interface PriorirtyPanelProps {
   color: string,
   text: string,
   priority: string,
   setPriority: (priority :string) => void,
   current:string,
   setCurrent:(current:string)=>void,
}
const PriorityPanel = ({ color, text, priority, setPriority,current,setCurrent }: PriorirtyPanelProps) => {
   console.log(current, "checking current and text");
   return (
      <View style={styles.panel}>
         <View style={[styles.indicator, { backgroundColor: color }]} />
         <CheckboxWithText text={text} priority={priority} setPriority={setPriority} checked={text === current}  setCurrent={setCurrent} current={current} />
      </View>
   );
};

export default PriorityPanel;
