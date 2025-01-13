import {
  StyleSheet,
  Text,
  View,
  Animated as RNAnimated,
  SafeAreaView,
} from 'react-native';
import React, { useEffect, useRef } from 'react';
import { useAuthStore } from '@state/authStore';
import NoticeAnimation from './NoticeAnimation';
import { NoticeHeight } from '@utils/Scaling';
import Visuals from './Visuals';
import {
  CollapsibleContainer,
  CollapsibleHeaderContainer,
  withCollapsibleContext,
} from '@r0b0t3d/react-native-collapsible';
import AnimatedHeader from './AnimatedHeader';
import StickySearchBar from './StickySearchBar';

const NOTICE_HEIGHT = -(NoticeHeight + 12);

const ProductDashboard = () => {
  const noticePosition = useRef(new RNAnimated.Value(NOTICE_HEIGHT)).current;

  const slideUp = () => {
    RNAnimated.timing(noticePosition, {
      toValue: NOTICE_HEIGHT,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const slideDown = () => {
    RNAnimated.timing(noticePosition, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    slideDown();
    const timeoutId = setTimeout(() => {
      slideUp();
    }, 3500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <NoticeAnimation noticePosition={noticePosition}>
      <>
        <Visuals />
        <SafeAreaView />
        <CollapsibleContainer style={styles.panelContainer}>
          <CollapsibleHeaderContainer containerStyle={styles.transparent}>
            <AnimatedHeader
              showNotice={() => {
                slideDown();
                const timerId = setTimeout(() => {
                  slideUp();
                }, 3500);
                return () => clearTimeout(timerId);
              }}
            />
            <StickySearchBar />
          </CollapsibleHeaderContainer>
        </CollapsibleContainer>
      </>
    </NoticeAnimation>
  );
};

export default withCollapsibleContext(ProductDashboard);

const styles = StyleSheet.create({
  panelContainer: {
    flex: 1,
  },
  transparent: {
    backgroundColor: 'transparent',
  },
});
