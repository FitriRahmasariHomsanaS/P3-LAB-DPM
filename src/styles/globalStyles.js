import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: '#3b5998',
    padding: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#d1d9e6',
  },
  footer: {
    fontSize: 12,
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: '#3b5998',
    padding: 10,
    borderTopWidth: 2,
    borderTopColor: '#d1d9e6',
  },
});

export default globalStyles;
