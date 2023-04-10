import { StyleSheet } from 'react-native';

const colors = {
  black: '#000000', // negro
  green: '#00FF7F', // verde fosforescente
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.green,
    marginBottom: 20,
  },
  section: {
    marginBottom: 50,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.green,
    marginBottom: 10,
  },
  sectionText: {
    color: '#ffffff',
    marginBottom: 10,
  },
});

export default styles;