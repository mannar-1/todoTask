import { 
  StyleSheet, 
  View, 
  Animated, 
  PanResponder,
  Dimensions,
  FlatList,
} from "react-native";
import { Text } from "react-native-paper";
import { useRef, useState, useCallback, useMemo } from "react";

const { height } = Dimensions.get('window');
const ITEM_HEIGHT = 70;

// Interface for TaskItem props
interface TaskItemProps {
  item: any;
  index: number;
  draggingIndex: number | null;
  onDragStart: (index: number) => void;
  onDragMove: (gesture: any, index: number) => void;
  onDragEnd: () => void;
}

// Interface for DraggableGeneratedTasks props
interface DraggableGeneratedTasksProps {
  tasks: any[];
}

const TaskItem: React.FC<TaskItemProps> = ({ 
  item, 
  index, 
  draggingIndex, 
  onDragStart, 
  onDragMove, 
  onDragEnd 
}) => {
  const itemRef = useRef(new Animated.Value(0)).current;

  const panResponder = useMemo(() => PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      onDragStart(index);
      itemRef.setValue(0);
    },
    onPanResponderMove: (_, gesture) => {
      itemRef.setValue(gesture.dy);
      onDragMove(gesture, index);
    },
    onPanResponderRelease: () => {
      Animated.spring(itemRef, {
        toValue: 0,
        useNativeDriver: true,
        friction: 5,
      }).start(() => {
        onDragEnd();
      });
    },
  }), [index, onDragStart, onDragMove, onDragEnd]);

  const isDragging = draggingIndex === index;
  const itemStyle = [
    styles.taskItem,
    isDragging && styles.dragging,
    {
      transform: [
        { translateY: itemRef },
        { scale: isDragging ? 1.05 : 1 }
      ],
      zIndex: isDragging ? 999 : 1,
    }
  ];

  return (
    <Animated.View style={itemStyle} {...panResponder.panHandlers}>
      <Text style={styles.taskText}>{item.task}</Text>
    </Animated.View>
  );
};

const DraggableGeneratedTasks: React.FC<DraggableGeneratedTasksProps> = ({ tasks: initialTasks }) => {
  const [tasks, setTasks] = useState(initialTasks);
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
  const scrollOffset = useRef(0);
  const flatListRef = useRef<FlatList>(null);

  const handleScroll = useCallback((event: any) => {
    scrollOffset.current = event.nativeEvent.contentOffset.y;
  }, []);

  const moveItem = useCallback((fromIndex: number, toIndex: number) => {
    if (fromIndex === toIndex) return;

    setTasks(prev => {
      const newTasks = [...prev];
      const item = newTasks[fromIndex];
      newTasks.splice(fromIndex, 1);
      newTasks.splice(toIndex, 0, item);
      return newTasks;
    });
    setDraggingIndex(toIndex);
  }, []);

  const getIndexFromY = useCallback((y: number) => {
    const yPos = y + scrollOffset.current;
    const index = Math.floor(yPos / ITEM_HEIGHT);
    return Math.max(0, Math.min(index, tasks.length - 1));
  }, [tasks.length]);

  const handleDragStart = useCallback((index: number) => {
    setDraggingIndex(index);
  }, []);

  const handleDragMove = useCallback((gesture: any, index: number) => {
    const currentIndex = getIndexFromY(gesture.moveY - 100);
    if (currentIndex !== index) {
      moveItem(index, currentIndex);
    }

    if (gesture.moveY < 150) {
      flatListRef.current?.scrollToOffset({
        offset: scrollOffset.current - 5,
        animated: true,
      });
    } else if (gesture.moveY > height - 150) {
      flatListRef.current?.scrollToOffset({
        offset: scrollOffset.current + 5,
        animated: true,
      });
    }
  }, [getIndexFromY, moveItem]);

  const handleDragEnd = useCallback(() => {
    setDraggingIndex(null);
  }, []);

  const renderItem = useCallback(({ item, index } : any) => (
    <TaskItem
      item={item}
      index={index}
      draggingIndex={draggingIndex}
      onDragStart={handleDragStart}
      onDragMove={handleDragMove}
      onDragEnd={handleDragEnd}
    />
  ), [draggingIndex, handleDragStart, handleDragMove, handleDragEnd]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.dragIndicator} />
      </View>
      <FlatList
        ref={flatListRef}
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={styles.listContent}
        removeClippedSubviews={false}
        getItemLayout={(_, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index,
        })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  header: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
  dragIndicator: {
    width: 40,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 3,
  },
  listContent: {
    padding: 16,
    backgroundColor: 'white',
  },
  taskItem: {
    height: ITEM_HEIGHT,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 12,
    padding: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  dragging: {
    opacity: 0.9,
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  taskText: {
    fontSize: 16,
    color: '#333',
  }
});

export default DraggableGeneratedTasks;