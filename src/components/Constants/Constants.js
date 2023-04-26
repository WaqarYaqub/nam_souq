import {Platform} from 'react-native';
const addressForConstants = '../../app_customer/config/env';
var BASE_URL_CLOUD_FLARE,
  TEMP_BASE_URL,
  TEMP_URL_CLOUD_FLARE,
  FACEBOOK_LOGIN_URL,
  GOOGLE_LOGIN_URL,
  CDN_IMAGE_URL_LIVE,
  CDN_IMAGE_URL_DEV;

if (Platform.OS === 'android' || Platform.OS === 'ios') {
  BASE_URL_CLOUD_FLARE = require(addressForConstants).BASE_URL_CLOUD_FLARE;
  TEMP_BASE_URL = require(addressForConstants).TEMP_BASE_URL;
  TEMP_URL_CLOUD_FLARE = require(addressForConstants).TEMP_URL_CLOUD_FLARE;
  FACEBOOK_LOGIN_URL = require(addressForConstants).FACEBOOK_LOGIN_URL;
  GOOGLE_LOGIN_URL = require(addressForConstants).GOOGLE_LOGIN_URL;
  CDN_IMAGE_URL_LIVE = require(addressForConstants).CDN_IMAGE_URL_LIVE;
  CDN_IMAGE_URL_DEV = require(addressForConstants).CDN_IMAGE_URL_DEV;
}
export {
  BASE_URL_CLOUD_FLARE,
  TEMP_BASE_URL,
  TEMP_URL_CLOUD_FLARE,
  FACEBOOK_LOGIN_URL,
  GOOGLE_LOGIN_URL,
  CDN_IMAGE_URL_LIVE,
  CDN_IMAGE_URL_DEV,
};
// Order Status
export const IN_PROGRESS = 'In Progress';
export const PENDING_APPROVAL = 'Pending Approval';
export const DECLINED = 'Declined';
export const PENDING_PAYMENT = 'Pending Payment';
export const EXPIRED = 'Expired';
export const COMPLETED = 'Completed';
export const RECEIVED = 'Received';
export const ACCEPTED = 'Accepted';

// Image Url
// export const BASE_URL_CLOUD_FLARE = 'https://dpw2yg2k9wc9e.cloudfront.net/';
