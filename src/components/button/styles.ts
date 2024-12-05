import {StyleSheet} from 'react-native'

import {colors} from '@/styles/colors'

export const styles = StyleSheet.create({
  container: {
    height: 52,
    width: "100%",
    backgroundColor: colors.green[300],
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    color: colors.green[900],
    fontWeight: "600"
  }
})