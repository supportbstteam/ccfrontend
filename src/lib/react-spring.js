import dynamic from 'next/dynamic';
// import { useSpring, animated } from 'react-spring';
// import { useGesture } from 'react-use-gesture';
const Spring = dynamic(() => import('react-spring'), { ssr: false });
const { useSpring, animated,useGesture } = Spring;

export { useSpring, animated,useGesture };
