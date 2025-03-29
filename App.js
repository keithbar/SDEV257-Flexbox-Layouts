// This app displays a series of numbered boxes, ordered as
// a series of rows containing two columns of two boxes each.

import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from "./styles";
import Box from "./Box";
import Column from "./Column";
import Row from "./Row";

// Number of boxes to render. Change this to change how many boxes are on screen.
const numBoxes = 12;

// Array of numbers that will be printed within each box
const boxes = new Array(numBoxes).fill(null).map((v, i) => i + 1);

// Array of rows, used to assign keys and index into the boxes array above
const rows = new Array(Math.ceil(numBoxes / 4)).fill(null).map((v, i) => i);

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      {rows.map((i) => (
        <Row key={i}>
          <Column>
            <Box key={4 * i}>#{boxes[4 * i]}</Box>
            {4 * i + 1 < numBoxes && (
              <Box key={4 * i + 1}>#{boxes[4 * i + 1]}</Box>
            )}
          </Column>
          <Column>
            {4 * i + 2 < numBoxes && (
              <Box key={4 * i + 2}>#{boxes[4 * i + 2]}</Box>
            )}
            {4 * i + 3 < numBoxes && (
              <Box key={4 * i + 3}>#{boxes[4 * i + 3]}</Box>
            )}
          </Column>
        </Row>
      ))}
    </View>
  );
}