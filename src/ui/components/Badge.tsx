import { Box, BoxProps, Text } from '../index';
import type { Theme } from '../theme';
import type { TextProps } from '@shopify/restyle';
import type { ReactNode } from 'react';

type BadgeVariant = 'warning' | 'error' | 'default';

interface Props {
  variant?: BadgeVariant;
  icon?: ReactNode;
  children?: string;
}

interface VariantClassNames {
  container: BoxProps<Theme>;
  text: TextProps<Theme>;
}

const variantClasses: Record<BadgeVariant, VariantClassNames> = {
  error: {
    container: { backgroundColor: 'transparent-error' },
    text: { color: 'text-error' },
  },
  warning: {
    container: { backgroundColor: 'transparent-warning' },
    text: { color: 'text-warning' },
  },
  default: {
    container: { backgroundColor: 'transparent-grey' },
    text: { color: 'text-primary' },
  },
};

export const Badge = ({ variant = 'default', children, icon }: Props) => {
  const { container, text } = variantClasses[variant];
  return (
    <Box
      gap={1}
      borderRadius="full"
      flexDirection="row"
      alignItems="center"
      aspectRatio={!children && icon ? 1 : undefined}
      px={children ? 1.5 : 1}
      py={children ? 1 : 1}
      {...container}
    >
      {children && (
        <Text variant="subtext" fontWeight={600} {...text}>
          {children}
        </Text>
      )}
      {icon && <Box>{icon}</Box>}
    </Box>
  );
};