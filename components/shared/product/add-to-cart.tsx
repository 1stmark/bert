"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Plus, Minus, Loader } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Cart, CartItem } from "@/types";
import {
  addItemToCart,
  removeItemFromCart,
  updateItemCart,
} from "@/lib/actions/cart.actions";
import { useTransition } from "react";

const AddToCart = ({ cart, item }: { cart?: Cart; item: CartItem }) => {
  const router = useRouter();
  const { toast } = useToast();

  const [isPending, startTransition] = useTransition();

  const handleAddToCart = async () => {
    startTransition(async () => {
      // Execute the addItemToCart action
      const res = await addItemToCart(item);

      // Display appropriate toast message based on the result
      if (!res.success) {
        toast({
          variant: "destructive",
          description: res.message,
        });
        return;
      }

      //handle success add to cart
      toast({
        description: res.message,
        action: (
          <ToastAction
            className="bg-primary text-white hover:bg-gray-800"
            altText="Go To Cart"
            onClick={() => router.push("/cart")}
          >
            Go To Cart
          </ToastAction>
        ),
      });
    });
  };

  const handleUpdateCart = async () =>
    startTransition(async () => {
      const res = await updateItemCart();
      if (!res.success) {
        toast({
          variant: "destructive",
          description: res.message,
        });
      }
    });

  // Handle remove from cart
  const handleRemoveFromCart = async () => {
    const res = await removeItemFromCart(item.productId);

    toast({
      variant: res.success ? "default" : "destructive",
      description: res.message,
    });
    return;
  };

  // check if item is in cart
  const currentItem =
    cart && cart.items.find((x) => x.productId === item.productId);

  return currentItem ? (
    <div className="inline-flex">
      <Button
        type="button"
        disabled={isPending}
        onClick={handleRemoveFromCart}
        className="rounded-l-full"
      >
        {isPending ? (
          <Loader className="w-4 h-4 animate-spin" />
        ) : (
          <Minus className="h-4 w-4" />
        )}
      </Button>
      <input
        className="h-10 w-14 text-center"
        type="text"
        id="qty"
        value={currentItem.qty}
        onBlur={handleUpdateCart}
      />
      <Button
        type="button"
        disabled={isPending}
        onClick={handleAddToCart}
        className="rounded-r-full"
      >
        {isPending ? (
          <Loader className="w-4 h-4 animate-spin" />
        ) : (
          <Plus className="h-4 w-4" />
        )}
      </Button>
    </div>
  ) : (
    <Button className="w-full" type="button" onClick={handleAddToCart}>
      <Plus />
      Add To Cart
    </Button>
  );
};

export default AddToCart;
