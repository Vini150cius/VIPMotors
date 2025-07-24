import { Fallback, Image, Root } from "@radix-ui/react-avatar";

import { cn } from "@/utils/cn";

function Avatar({ className, ...props }) {
  return (
    <Root
      className={cn(
        "relative flex size-10 shrink-0 overflow-hidden rounded-full",
        className
      )}
      data-slot="avatar"
      {...props}
    />
  );
}

function AvatarImage({ className, ...props }) {
  return (
    <Image
      className={cn("aspect-square size-full", className)}
      data-slot="avatar-image"
      {...props}
    />
  );
}

function AvatarFallback({ className, ...props }) {
  return (
    <Fallback
      className={cn(
        "flex size-full items-center justify-center rounded-full bg-red-700",
        className
      )}
      data-slot="avatar-fallback"
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
