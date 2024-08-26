'use client';

import { HTMLAttributeAnchorTarget, ReactNode } from 'react';
import {
  AnimationControls,
  Target,
  TargetAndTransition,
  VariantLabels,
  Variants,
  motion,
} from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface PageProps {
  src?: string;
  alt?: string;
  href?: string;
  title?: string;
  viewport?: any;
  transition?: any;
  className?: string;
  width?: number;
  height?: number;
  variants?: Variants;
  elementType?: string;
  children?: ReactNode;
  inLine?: boolean;
  target?: HTMLAttributeAnchorTarget | undefined;
  initial?: boolean | Target | VariantLabels;
  whileHover?: VariantLabels | TargetAndTransition;
  whileInView?: VariantLabels | TargetAndTransition;
  animate?: AnimationControls | TargetAndTransition | VariantLabels | boolean;
}

export const SmotionHeader = (props: PageProps) => {
  return (
    <>
      {props.elementType === 'h1' && (
        <motion.h1
          initial={props.initial}
          whileInView={props.whileInView}
          viewport={props.viewport}
          transition={props.transition}
          className={props.className}
        >
          {props.children}
        </motion.h1>
      )}
      {props.elementType === 'h2' && (
        <motion.h2
          initial={props.initial}
          whileInView={props.whileInView}
          viewport={props.viewport}
          transition={props.transition}
          className={props.className}
        >
          {props.children}
        </motion.h2>
      )}
    </>
  );
};

export const SmotionSpan = (props: PageProps) => {
  return <motion.span animate={props.animate}>{props.children}</motion.span>;
};

export const SmotionDiv = (props: PageProps) => {
  return (
    <motion.div
      initial={props.initial}
      animate={props.animate}
      whileInView={props.whileInView}
      viewport={props.viewport}
      transition={props.transition}
      variants={props.variants}
      className={props.className}
    >
      {props.children}
    </motion.div>
  );
};

export const SmotionLink = (props: PageProps) => {
  return (
    <motion.div
      initial={props.initial}
      whileInView={props.whileInView}
      viewport={props.viewport}
      whileHover={props.whileHover}
      transition={props.transition}
      variants={props.variants}
      title={props.title}
      className={`flex justify-center items-center ${
        props.inLine && `inline-flex`
      }`}
    >
      <Link
        href={props.href as string}
        target={props.target}
        className={props.className}
      >
        {props.children}
      </Link>
    </motion.div>
  );
};

export const SmotionP = (props: PageProps) => {
  return (
    <motion.p
      initial={props.initial}
      whileInView={props.whileInView}
      viewport={props.viewport}
      className={props.className}
    >
      {props.children}
    </motion.p>
  );
};
