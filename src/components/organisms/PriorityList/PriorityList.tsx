import React, { useEffect, useState } from 'react';
import PriorityPanel from '../../molecules/prioritypanel/PriorityPanel';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

interface PriorirtyList {
    priority: string,
    setPriority: (priority:string) => void
}
const PriorirtyList = ({ priority, setPriority }: PriorirtyList) => {
    const priorites = [{ color: 'rgb(223, 126, 141)', text: 'Urgent' }, { color: 'rgb(248, 217, 79)', text: 'Regular' }, { color: 'rgb(119, 212, 189)', text: 'Low' }]
    console.log(priority,"receving priority");
    console.log(priority,"dp")
    const [current,setCurrent] = useState(priority);

     useEffect(() => {
        setCurrent(priority);
    }, [priority]);
    
    return (
        <View>
            <Text variant="titleLarge" style={{ color: 'rgb(128, 131, 151)', marginLeft: 15, padding: 5 }}>Type</Text>
            {priorites.map((item) =>
                <PriorityPanel
                    key={item.text}
                    color={item.color}
                    text={item.text}
                    priority={priority}
                    setPriority={setPriority}
                    current={current}
                    setCurrent={setCurrent}
                />)}
        </View>

    )
};
export default PriorirtyList;
