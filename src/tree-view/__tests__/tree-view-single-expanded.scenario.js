/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from 'react';

import {Unstable_StatefulTreeView as StatefulTreeView} from '../index.js';

export const name = 'tree-view-single-expanded';

const initialData = [
  {
    label: 'Node 1',
    isExpanded: true,
    children: [
      {
        label: 'Child 1.1',
        isExpanded: true,
        children: [
          {
            label: 'Grandchild 1.1.1',
            isExpanded: true,
            children: [
              {
                label: 'Greatgrandchild 1.1.1.1',
                isExpanded: true,
              },
              {
                label: 'Greatgrandchild 1.1.1.2',
              },
              {
                label: 'Greatgrandchild 1.1.1.3',
              },
            ],
          },
          {
            label: 'Grandchild 1.1.2',
            children: [
              {
                label: 'Greatgrandchild 1.1.2.1',
              },
              {
                label: 'Greatgrandchild 1.1.2.2',
              },
              {
                label: 'Greatgrandchild 1.1.2.3',
              },
            ],
          },
          {
            label: 'Grandchild 1.1.3',
            children: [
              {
                label: 'Greatgrandchild 1.1.3.1',
              },
              {
                label: 'Greatgrandchild 1.1.3.2',
              },
              {
                label: 'Greatgrandchild 1.1.3.3',
              },
            ],
          },
        ],
      },
      {
        label: 'Child 1.2',
        children: [
          {
            label: 'Grandchild 1.2.1',
            isExpanded: true,
            children: [
              {
                label: 'Greatgrandchild 1.2.1.1',
                isExpanded: true,
              },
              {
                label: 'Greatgrandchild 1.2.1.2',
              },
              {
                label: 'Greatgrandchild 1.2.1.3',
              },
            ],
          },
          {
            label: 'Grandchild 1.2.2',
            children: [
              {
                label: 'Greatgrandchild 1.2.2.1',
              },
              {
                label: 'Greatgrandchild 1.2.2.2',
              },
              {
                label: 'Greatgrandchild 1.2.2.3',
              },
            ],
          },
          {
            label: 'Grandchild 1.2.3',
            children: [
              {
                label: 'Greatgrandchild 1.2.3.1',
              },
              {
                label: 'Greatgrandchild 1.2.3.2',
              },
              {
                label: 'Greatgrandchild 1.2.3.3',
              },
            ],
          },
        ],
      },
      {
        label: 'Child 1.3',
        children: [
          {
            label: 'Grandchild 1.3.1',
            isExpanded: true,
            children: [
              {
                label: 'Greatgrandchild 1.3.1.1',
                isExpanded: true,
              },
              {
                label: 'Greatgrandchild 1.3.1.2',
              },
              {
                label: 'Greatgrandchild 1.3.1.3',
              },
            ],
          },
          {
            label: 'Grandchild 1.3.2',
            children: [
              {
                label: 'Greatgrandchild 1.3.2.1',
              },
              {
                label: 'Greatgrandchild 1.3.2.2',
              },
              {
                label: 'Greatgrandchild 1.3.2.3',
              },
            ],
          },
          {
            label: 'Grandchild 1.3.3',
            children: [
              {
                label: 'Greatgrandchild 1.3.3.1',
              },
              {
                label: 'Greatgrandchild 1.3.3.2',
              },
              {
                label: 'Greatgrandchild 1.3.3.3',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'Node 2',
    children: [
      {
        label: 'Child 2.1',
        children: [
          {
            label: 'Grandchild 2.1.1',
          },
          {
            label: 'Grandchild 2.1.2',
          },
          {
            label: 'Grandchild 2.1.3',
          },
        ],
      },
      {
        label: 'Child 2.2',
        children: [
          {
            label: 'Grandchild 2.2.1',
          },
          {
            label: 'Grandchild 2.2.2',
          },
          {
            label: 'Grandchild 2.2.3',
          },
        ],
      },
      {
        label: 'Child 2.3',
        children: [
          {
            label: 'Grandchild 2.3.1',
          },
          {
            label: 'Grandchild 2.3.2',
          },
          {
            label: 'Grandchild 2.3.3',
          },
        ],
      },
    ],
  },
];

export const component = () => (
  <StatefulTreeView singleExpanded={true} data={initialData} />
);