import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { useStoreModal } from "@/hook/use-store-modal";
import { Store } from "@prisma/client";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { StoreIcon } from "lucide-react";
import { cn } from "@/lib/utils";
type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;
interface StoreSwitcherProps extends PopoverTriggerProps {
  items: Store[];
}

export default function StoreSwitcher({
  className,
  items = [],
}: StoreSwitcherProps) {
  const [open, setOpen] = useState(false);
  const storeModal = useStoreModal();
  const params = useParams();
  const router = useRouter();
  const formatedItems = items.map((item) => ({
    lablel: item.name,
    value: item.id,
  }));
  const currentStore = formatedItems.find(
    (item) => item.value === params.storeId
  );
  console.log(formatedItems);
  const onStoreSelect = (store: { value: string; lable: string }) => {
    setOpen(false);
    router.push(`/${store.value}`);
  };
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          role="combobox"
          aria-expanded={open}
          aria-label="Select a store"
          className={cn("w-[200px] justify-between", className)}
        >
          <StoreIcon className="w-4 h-4 mr-2" />
        </Button>
      </PopoverTrigger>
    </Popover>
  );
}
