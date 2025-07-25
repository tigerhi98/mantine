import {
  ClassNames,
  createSafeContext,
  GetStylesApi,
  MantineRadius,
  MantineShadow,
  Styles,
} from '../../core';
import { ArrowPosition, FloatingPosition, FloatingStrategy } from '../../utils/Floating';
import { BasePortalProps } from '../Portal';
import { TransitionOverride } from '../Transition';
import type { PopoverFactory } from './Popover';
import { PopoverWidth } from './Popover.types';

interface PopoverContext {
  x: number;
  y: number;
  arrowX: number | undefined;
  arrowY: number | undefined;
  arrowRef: React.RefObject<HTMLDivElement | null>;
  opened: boolean;
  transitionProps?: TransitionOverride;
  reference: (node: HTMLElement) => void;
  floating: (node: HTMLElement) => void;
  width?: PopoverWidth;
  withArrow: boolean | undefined;
  arrowSize: number;
  arrowOffset: number;
  arrowRadius: number;
  arrowPosition: ArrowPosition;
  trapFocus: boolean | undefined;
  placement: FloatingPosition;
  withinPortal: boolean | undefined;
  portalProps?: BasePortalProps;
  closeOnEscape: boolean | undefined;
  zIndex: string | number | undefined;
  radius?: MantineRadius | undefined;
  shadow?: MantineShadow | undefined;
  onClose?: () => void;
  onDismiss?: () => void;
  getDropdownId: () => string;
  getTargetId: () => string;
  controlled: boolean;
  onToggle: () => void;
  withRoles: boolean | undefined;
  targetProps: Record<string, any>;
  disabled: boolean | undefined;
  returnFocus: boolean | undefined;
  classNames: ClassNames<PopoverFactory> | undefined;
  styles: Styles<PopoverFactory> | undefined;
  unstyled: boolean | undefined;
  __staticSelector: string;
  variant: string | undefined;
  keepMounted: boolean | undefined;
  getStyles: GetStylesApi<PopoverFactory>;
  resolvedStyles: Record<string, any>;
  floatingStrategy: FloatingStrategy | undefined;
  referenceHidden: boolean | undefined;
}

export const [PopoverContextProvider, usePopoverContext] = createSafeContext<PopoverContext>(
  'Popover component was not found in the tree'
);
