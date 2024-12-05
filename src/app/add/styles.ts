import {StyleSheet} from 'react-native'

import {colors} from '@/styles/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
  },
  header: {
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingHorizontal: 24,
    marginBottom: 24
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.gray[200]
  },
  label: {
    color: colors.gray[400],
    fontSize: 14,
    paddingHorizontal: 24
  },
  form: {
    padding: 24,
    gap: 16
  }
})