"use client";
import { useEffect } from "react";
import { useStoreModal } from "@/hook/use-store-modal";
import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";

export default function SetupPage() {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);
  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [onOpen, isOpen]);

  return (
    <div className="p-4">
      {/* <Modal onClose={() => {}} title="test" description="test descrip" isOpen> */}
      {/* <UserButton afterSignOutUrl="/" /> */}
      {/* /   children */}
      {/* </Modal> */}
      test
    </div>
  );
}
 