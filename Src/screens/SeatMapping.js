import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';

 
const ROWS = 10; 
const COLUMNS = 10;  

 
const generateSeats = () => {
  const seats = [];
  for (let row = 0; row < ROWS; row++) {
    const leftSeats = [];
    const centerSeats = [];
    const rightSeats = [];
    for (let col = 0; col < COLUMNS; col++) {
      leftSeats.push({
        id: `L${row}-${col}`,
        status: Math.random() < 0.8 ? 'available' : 'unavailable',  
      });
      centerSeats.push({
        id: `C${row}-${col}`,
        status: Math.random() < 0.8 ? 'available' : 'unavailable',
      });
      rightSeats.push({
        id: `R${row}-${col}`,
        status: Math.random() < 0.8 ? 'available' : 'unavailable',
      });
    }
    seats.push({ left: leftSeats, center: centerSeats, right: rightSeats });
  }
  return seats;
};

const SeatMapping = () => {
  const [seats, setSeats] = useState(generateSeats());

  const handleSeatPress = (id) => {
    setSeats((prevSeats) =>
      prevSeats.map((row) => ({
        left: row.left.map((seat) =>
          seat.id === id && seat.status === 'available' ? { ...seat, status: 'selected' } : seat
        ),
        center: row.center.map((seat) =>
          seat.id === id && seat.status === 'available' ? { ...seat, status: 'selected' } : seat
        ),
        right: row.right.map((seat) =>
          seat.id === id && seat.status === 'available' ? { ...seat, status: 'selected' } : seat
        ),
      }))
    );
  };

  const renderSeat = (seat) => {
    const seatStyle =
      seat.status === 'available'
        ? styles.seatAvailable
        : seat.status === 'selected'
        ? styles.seatSelected
        : styles.seatUnavailable;

    return (
      <TouchableOpacity
        key={seat.id}
        style={[styles.seat, seatStyle]}
        onPress={() => handleSeatPress(seat.id)}
        disabled={seat.status === 'unavailable'}
      >
        <Text style={styles.seatText}>{seat.id}</Text>
      </TouchableOpacity>
    );
  };

  const renderRow = ({ item: row }) => {
    return (
      <View style={styles.row}>
        <View style={styles.column}>
          {row.left.map(renderSeat)}
        </View>
        <View style={styles.column}>
          {row.center.map(renderSeat)}
        </View>
        <View style={styles.column}>
          {row.right.map(renderSeat)}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={seats}
        renderItem={renderRow}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.seatContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F6',
    padding: 10,
  },
  seatContainer: {
    paddingBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  column: {
    flex: 1,
    alignItems: 'center',
  },
  seat: {
    width: 30,
    height: 30,
    margin: 3,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  seatAvailable: {
    backgroundColor: '#4CAF50',  
  },
  seatSelected: {
    backgroundColor: '#FFC107', 
  },
  seatUnavailable: {
    backgroundColor: '#F44336',  
  },
  seatText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default SeatMapping;
