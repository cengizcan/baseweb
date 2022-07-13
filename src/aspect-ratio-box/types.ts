/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import type { BlockPropsT } from '../block';

export type AspectRatioBoxPropsT<T extends React.ElementType = React.ElementType> = {
  /** Aspect ratio is width divided by height. */
  readonly aspectRatio?: number;
} & BlockPropsT<T>;
