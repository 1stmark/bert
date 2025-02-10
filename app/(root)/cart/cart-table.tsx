"use client";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { ArrowRight, Loader } from "lucide-react";
import { Cart } from "@/types";
import Link from "next/link";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import AddToCart from "@/components/shared/product/add-to-cart";

const CartTable = ({ cart }: { cart?: Cart }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <>
      <h1 className="py-4 h2-bold">Shopping Cart</h1>
      {!cart || cart.items.length === 0 ? (
        <div>
          Cart is empty. <Link href="/">Go Shopping</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item / Cost</TableHead>
                  <TableHead className="text-center">Quantity</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cart.items.map((currentItem) => (
                  <TableRow key={currentItem.slug}>
                    <TableCell className="flex-row justify-start">
                      <Link
                        href={`/product/${currentItem.slug}`}
                        className="flex items-center"
                      >
                        <div className="flex-row">
                          <Image
                            src={currentItem.image}
                            alt={currentItem.name}
                            width={50}
                            height={50}
                            className="rounded-sm"
                          />
                        </div>
                        <div className="flex-col px-2">
                          <div>{currentItem.name}</div>

                          <div>{formatCurrency(currentItem.price)}</div>
                        </div>
                      </Link>
                    </TableCell>
                    {/*<TableCell>
                        <Button
                        className=" rounded-l-3xl"
                        disabled={isPending}
                        type="button"
                        onClick={() =>
                          startTransition(async () => {
                            const res = await removeItemFromCart(
                              currentItem.productId
                            );
                            if (!res.success) {
                              toast({
                                variant: "destructive",
                                description: res.message,
                              });
                            }
                          })
                        }
                      >
                        {isPending ? (
                          <Loader className="w-4 h-4  animate-spin" />
                        ) : (
                          <Minus className="w-4 h-4" />
                        )}
                      </Button>

                      <input
                        className="w-12 h-10 text-center px-0 mx-0"
                        type="text"
                        id="qty"
                        value={currentItem.qty}
                        onChange={() =>
                          startTransition(async () => {
                            const res = await updateItemCart();
                            if (!res.success) {
                              toast({
                                variant: "destructive",
                                description: res.message,
                              });
                            }
                          })
                        }
                      />

                      <Button
                        className="rounded-r-3xl"
                        disabled={isPending}
                        type="button"
                        onClick={() =>
                          startTransition(async () => {
                            const res = await addItemToCart(currentItem);
                            if (!res.success) {
                              toast({
                                variant: "destructive",
                                description: res.message,
                              });
                            }
                          })
                        }
                      >
                        {isPending ? (
                          <Loader className="w-4 h-4  animate-spin" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </Button> */}
                    <TableCell className="text-center">
                      <AddToCart
                        cart={cart}
                        item={{
                          productId: currentItem.productId,
                          name: currentItem.name,
                          slug: currentItem.slug,
                          price: currentItem.price,
                          qty: 1,
                          image: currentItem.image,
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <div className="text-right">
                        {formatCurrency(
                          Number(currentItem.qty) * Number(currentItem.price)
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <Card>
            <CardContent className="p-4 gap-4">
              <div className="pb-3 text-xl">
                Subtotal ({cart.items.reduce((a, c) => a + c.qty, 0)}):
                <span className="pl-2 font-bold">
                  {formatCurrency(cart.itemsPrice)}
                </span>
              </div>
              <Button
                onClick={() =>
                  startTransition(() => router.push("/shipping-address"))
                }
                className="w-full"
                disabled={isPending}
              >
                {isPending ? (
                  <Loader className="animate-spin w-4 h-4" />
                ) : (
                  <ArrowRight className="w-4 h-4" />
                )}
                Proceed To Checkout
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default CartTable;
