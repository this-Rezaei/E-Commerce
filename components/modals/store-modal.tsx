"use client";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useStoreModal } from "@/hook/use-store-modal";
import { Modal } from "@/components/ui/modal";
import { zodResolver } from "@hookform/resolvers/zod";
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});
export default function StoreModal() {
  const storeModal = useStoreModal();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <Modal
      title="create store"
      description="kfgfnhgkfnsdnfdhnfn"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Futur create store
    </Modal>
  );
}
