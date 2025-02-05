import { CircleCheck } from "lucide-react";
import { Dialog, DialogContent } from "./ui/dialog";

export default function CheckoutModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange} modal>
      <DialogContent className="flex flex-col items-center space-y-4 p-7 text-center">
        <h2 className="pb-2 text-3xl font-semibold tracking-tight">
          ¡Gracias por tu compra!
        </h2>
        <p className=" text-muted-foreground">
          Tu compra ha sido procesada exitosamente. Recibirás un correo de
          confirmación con los detalles de tu compra.
        </p>
        <CircleCheck size={64} className=" text-green-600" />
      </DialogContent>
    </Dialog>
  );
}
