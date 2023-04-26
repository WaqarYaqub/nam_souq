import {Platform, StyleSheet} from 'react-native';

import {
  TEXT_COLOR_WHITE,
  CELEBRITY_CARD_TEXT_COLOR_DEFAULT,
  DRAWER_HIGHLIGHTED_ITEM_COLOR_DEFAULT,
  DRAWER_NOTIFICATIONS_COLOR_DEFAULT,
  BORDER_COLOR_HOME_SCREEN_TAB_ACTIVE,
} from '../Constants/Colors';
import {OPEN_SANS_REGULAR, PROXIMA_NOVA_REGULAR} from '../Constants/Fonts';

const styles = StyleSheet.create({
  drawerHeader: {
    padding: 20,
    width: 270,
    height: 100,
    backgroundColor: '#180F45',
    justifyContent: 'space-around',
    display: 'flex',
    flexDirection: 'row'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderWidth: 2,
    borderColor: TEXT_COLOR_WHITE,
    marginRight: 8,
    marginBottom: 18,
  },
  name: {
    fontFamily:
      Platform.OS === 'web' ? 'PROXIMA_NOVA_REGULAR' : PROXIMA_NOVA_REGULAR,
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 25,
    color: TEXT_COLOR_WHITE,
  },
  profileText: {
    fontFamily: Platform.OS === 'web' ? 'OPEN_SANS_REGULAR' : OPEN_SANS_REGULAR,
    fontWeight: '400',
    fontStyle: 'normal',
    color: TEXT_COLOR_WHITE,
    fontSize: 11,
  },
  drawerItems: {
    fontFamily: Platform.OS === 'web' ? 'OPEN_SANS_REGULAR' : OPEN_SANS_REGULAR,
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 11,
    lineHeight: 20,
    letterSpacing: -0.24,
    color: CELEBRITY_CARD_TEXT_COLOR_DEFAULT,
    color: 'white'
  },
  referFriendStyle: {
    fontFamily:
      Platform.OS === 'web' ? 'PROXIMA_NOVA_REGULAR' : PROXIMA_NOVA_REGULAR,
    fontWeight: '600',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: -0.24,
    color: DRAWER_HIGHLIGHTED_ITEM_COLOR_DEFAULT,
  },
  notifications: {
    fontFamily: Platform.OS === 'web' ? 'OPEN_SANS_REGULAR' : OPEN_SANS_REGULAR,
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 20,
    color: DRAWER_NOTIFICATIONS_COLOR_DEFAULT,
  },
  headingText: {
    fontFamily:
      Platform.OS === 'web' ? 'PROXIMA_NOVA_REGULAR' : PROXIMA_NOVA_REGULAR,
    fontWeight: '600',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: -0.24,
    color: BORDER_COLOR_HOME_SCREEN_TAB_ACTIVE,
    marginLeft: 20,
    marginTop: 16,
  },
  simpleText: {
    fontFamily: Platform.OS === 'web' ? 'OPEN_SANS_REGULAR' : OPEN_SANS_REGULAR,
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 20,
    color: CELEBRITY_CARD_TEXT_COLOR_DEFAULT,
    marginLeft: 20,
  },
  separator: {
    borderWidth: 1,
    borderColor: DRAWER_NOTIFICATIONS_COLOR_DEFAULT,
  },
  rowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default styles;
