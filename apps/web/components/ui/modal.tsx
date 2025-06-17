/**
 * HAWKINS DESIGN SYSTEM - Modal Component
 *
 * @see {@link https://hawkins.vercel.app/components/modal|Modal Documentation}
 */
import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';

import { cn } from '@repo/utils/cn';
import { Button } from '@repo/ui/button';

const Modal = DialogPrimitive.Root;

const ModalTrigger = DialogPrimitive.Trigger;

const modalOverlayVariants = cva('fixed inset-0 z-50 bg-surface-overlay backdrop-blur-sm', {
  variants: {
    state: {
      open: 'animate-in fade-in-0',
      closed: 'animate-out fade-out-0',
    },
  },
});

const modalContentVariants = cva(
  'fixed left-1/2 top-1/2 z-50 flex w-full max-w-lg flex-col -translate-x-1/2 -translate-y-1/2 border bg-surface-3 shadow-mid duration-200 sm:rounded-sm',
  {
    variants: {
      state: {
        open: 'animate-in fade-in-0 zoom-in-95 slide-in-from-left-1/2 slide-in-from-top-[48%]',
        closed: 'animate-out fade-out-0 zoom-out-95 slide-out-to-left-1/2 slide-out-to-top-[48%]',
      },
      fullScreen: {
        true: 'w-screen h-screen max-w-full sm:rounded-none',
      },
    },
  },
);

interface ModalContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof modalContentVariants> {}

const ModalContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  ModalContentProps
>(({ className, children, fullScreen, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className={modalOverlayVariants({ state: 'open' })} />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(modalContentVariants({ state: 'open', fullScreen }), className)}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
));
ModalContent.displayName = DialogPrimitive.Content.displayName;

const ModalHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex flex-col space-y-2 px-6 pt-6 text-left', className)}
    {...props}
  />
);
ModalHeader.displayName = 'ModalHeader';

const ModalBody = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex-1 overflow-y-auto px-6 pb-6', className)} {...props} />
);
ModalBody.displayName = 'ModalBody';

const ModalFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex items-center justify-end gap-3 rounded-b-sm bg-surface-highlight px-6 py-4',
      className,
    )}
    {...props}
  />
);
ModalFooter.displayName = 'ModalFooter';

const ModalTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('text-xl font-semibold leading-6 tracking-tight text-foreground', className)}
    {...props}
  />
));
ModalTitle.displayName = DialogPrimitive.Title.displayName;

const ModalDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-base font-normal leading-5 text-foreground-subtle', className)}
    {...props}
  />
));
ModalDescription.displayName = DialogPrimitive.Description.displayName;

// Composite component for ease of use
const ComposedModal = Object.assign(Modal, {
  Trigger: ModalTrigger,
  Content: ModalContent,
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
  Title: ModalTitle,
  Description: ModalDescription,
  Close: DialogPrimitive.Close,
});

/**
 * For simple confirmation dialogs with a title, description, and actions.
 * @example
 * <ConfirmationModal
 *  trigger={<Button>Delete</Button>}
 *  title="Are you sure?"
 *  description="This action cannot be undone."
 *  onConfirm={() => console.log('Confirmed')}
 * />
 */
const ConfirmationModal = ({
  trigger,
  title,
  description,
  onConfirm,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
}: {
  trigger: React.ReactNode;
  title: string;
  description: string;
  onConfirm: () => void;
  confirmText?: string;
  cancelText?: string;
}) => {
  return (
    <Modal>
      <ModalTrigger asChild>{trigger}</ModalTrigger>
      {/* The 36px gap is based on the 35px from the Figma design, rounded to the nearest 4px grid value. */}
      <ModalContent className="gap-9">
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <ModalDescription>{description}</ModalDescription>
        </ModalHeader>
        {/* Custom footer for ConfirmationModal to match Figma design (no background overlay) */}
        <div className="flex justify-end gap-3 px-6 pb-6">
          <DialogPrimitive.Close asChild>
            <Button variant="secondary">{cancelText}</Button>
          </DialogPrimitive.Close>
          <DialogPrimitive.Close asChild>
            <Button
              variant="destructive"
              onClick={(e) => {
                e.preventDefault();
                onConfirm();
              }}
            >
              {confirmText}
            </Button>
          </DialogPrimitive.Close>
        </div>
      </ModalContent>
    </Modal>
  );
};

export {
  ComposedModal as Modal,
  ConfirmationModal,
  ModalTrigger, // Keep original trigger for flexibility
}; 